import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwt-payload';
import { LoginRequest, SignupRequest } from './models';
import { AuthUser } from './auth-user';
import { PrismaService } from '../common/services/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupRequest: SignupRequest): Promise<void> {
    try {
      await this.prisma.user.create({
        data: {
          username: signupRequest.username.toLowerCase(),
          password: await bcrypt.hash(signupRequest.password, 10),
        },
        select: null,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          // unique constraint
          throw new ConflictException();
        } else throw e;
      } else throw e;
    }
  }

  async validateUser(payload: JwtPayload): Promise<AuthUser> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });

    if (user !== null && user.username === payload.username) {
      return user;
    }
    throw new UnauthorizedException();
  }

  async login(loginRequest: LoginRequest): Promise<string> {
    const normalizedIdentifier = loginRequest.username.toLowerCase();
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          {
            username: normalizedIdentifier,
          },
        ],
      },
      select: {
        id: true,
        password: true,
        username: true,
      },
    });

    if (
      user === null ||
      !bcrypt.compareSync(loginRequest.password, user.password)
    ) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
    };

    return this.jwtService.signAsync(payload);
  }
}
