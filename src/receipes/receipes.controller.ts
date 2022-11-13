import { Controller, Get, Param } from '@nestjs/common';
import { ReceipesService } from './receipes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('receipes')
@Controller('receipes')
export class ReceipesController {
  constructor(private readonly receipesService: ReceipesService) {}

  @Get()
  findAllReceipes() {
    console.log('All receipes fetched');
    return this.receipesService.getAllReceipes();
  }

  @Get(':id')
  findOneReceipeById(@Param('id') id: string) {
    console.log('One receipe fetched with id: ' + id);
    return this.receipesService.getOneReceipe(+id);
  }
}
