import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductUsersService } from './product-users.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductUsersRequest } from './request/create-product-users.request';

@ApiTags('product-users')
@Controller('product-users')
export class ProductUsersController {
  constructor(private readonly productUsersService: ProductUsersService) {}

  @ApiOkResponse({
    description: 'ProductUsers has been fetched',
  })
  @ApiBadRequestResponse({
    description: 'ProductUsers has not been fetched',
  })
  @Get(':id/product-users')
  findManyProductUsers(@Param('id') id: number) {
    return this.productUsersService.getProductUsers(+id);
  }

  @ApiCreatedResponse({
    description: 'ProductUsers has been created',
  })
  @ApiBadRequestResponse({
    description: 'ProductUsers has not been created',
  })
  @Post('/create-product-users')
  addMeasurement(@Body() createProductUsersRequest: CreateProductUsersRequest) {
    this.productUsersService.createProductUsers(createProductUsersRequest);
  }
}
