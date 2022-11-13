import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { CreateProductUsersRequest } from './request/create-product-users.request';
import { ProductUsers } from '@prisma/client';

@Injectable()
export class ProductUsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProductUsers(
    createProductUsersRequest: CreateProductUsersRequest,
  ): Promise<ProductUsers> {
    const { userId, productId } = createProductUsersRequest;
    const productUsers = this.prismaService.productUsers.create({
      data: {
        userId: userId,
        productId: productId,
      },
    });
    console.log('POST productUsers successful');
    return productUsers;
  }

  async getProductUsers(id: number): Promise<ProductUsers[]> {
    const productUsers = this.prismaService.productUsers.findMany({
      where: {
        userId: id,
      },
    });
    console.log('GET productUsers successful');
    return productUsers;
  }
}
