import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Receipe } from '@prisma/client';

@Injectable()
export class ReceipesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllReceipes(): Promise<Receipe[]> {
    console.log('GET all receipes');
    return this.prismaService.receipe.findMany();
  }

  async getOneReceipe(id: number): Promise<Receipe> {
    console.log('GET receipe with id ' + id);
    return this.prismaService.receipe.findUnique({ where: { id: id } });
  }
}
