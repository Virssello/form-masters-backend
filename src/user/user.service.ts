import { Injectable } from '@nestjs/common';
import { AuthUser } from '../auth/auth-user';
import { PrismaService } from '../common/services/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUserEntityById(id: number): Promise<AuthUser | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  public async getUserEntityByUsername(
    username: string,
  ): Promise<AuthUser | null> {
    const normalizedUsername = username.toLowerCase();
    return this.prisma.user.findUnique({
      where: { username: normalizedUsername },
    });
  }
}
