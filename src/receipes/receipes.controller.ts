import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReceipesService } from './receipes.service';
import { CreateReceipeDto } from './dto/create-receipe.dto';
import { UpdateReceipeDto } from './dto/update-receipe.dto';

@Controller('receipes')
export class ReceipesController {
  constructor(private readonly receipesService: ReceipesService) {}

  @Post('add')
  create(@Body() createReceipeDto: CreateReceipeDto) {
    return this.receipesService.create(createReceipeDto);
  }

  @Get()
  findAll() {
    return this.receipesService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.receipesService.findOne(id);
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.receipesService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceipeDto: UpdateReceipeDto) {
    return this.receipesService.update(+id, updateReceipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receipesService.remove(+id);
  }
}
