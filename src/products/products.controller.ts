import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAllProducts() {
    console.log('All products fetched');
    return this.productsService.getAllProducts();
  }
  @Get(':id')
  findOneProductById(@Param('id') id: number) {
    console.log('One product fetched with id: ' + id);
    return this.productsService.getOneProduct(+id);
  }

  @Get('product-user/:id')
  findManyProductUser(@Param('id') id: number) {
    console.log('Many products fetched with userId: ' + id);
    return this.productsService.getManyProductsUser(+id);
  }
}
