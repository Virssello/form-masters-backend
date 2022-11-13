import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getOneUser(id: number): Promise<User> {
    console.log('GET user succesfull');
    return this.prismaService.user.findUnique({ where: { id: id } });
  }
}
