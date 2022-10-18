import { CreateProductDto } from './dto/create-product.dto';
import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { checkServerIdentity } from 'tls';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      productId: 1,
      name: 'Cheese',
      calories: 100,
      protein: 10,
      carbohydrate: 20,
      fat: 30,
    },
    {
      productId: 2,
      name: 'Ham',
      calories: 200,
      protein: 40,
      carbohydrate: 60,
      fat: 70,
    },
    {
      productId: 3,
      name: 'Milk',
      calories: 300,
      protein: 50,
      carbohydrate: 60,
      fat: 70,
    },
  ];

  create(createProductDto: CreateProductDto) {
    const product = {
      productId: this.products.length + 1,
      ...createProductDto,
    };
    this.products.push(product);
    return true;
  }

  findAll() {
    return this.products;
  }

  async findOne(name: string): Promise<Product | undefined> {
    return this.products.find((product) => product.name === name);
  }

  async findOneById(id: number): Promise<Product | undefined> {
    return this.products.find((product) => product.productId === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
