import { Controller, Get, Param } from '@nestjs/common';
import { ReceipesService } from './receipes.service';

@Controller('receipes')
export class ReceipesController {
  constructor(private readonly receipesService: ReceipesService) {}

  @Get()
  findAll() {
    return this.receipesService.getAllReceipes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receipesService.getOneReceipe(+id);
  }

  /*  @Post()
  create(@Body() createReceipeDto: CreateReceipeDto) {
    return this.receipesService.create(createReceipeDto);
  }*/

  /*

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceipeDto: UpdateReceipeDto) {
    return this.receipesService.update(+id, updateReceipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receipesService.remove(+id);
  }*/
}
