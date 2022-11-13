import { Controller, Get, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('receipes')
@Controller('receipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  findAllRecipes() {
    console.log('All receipes fetched');
    return this.recipesService.getAllRecipes();
  }

  @Get(':id')
  findOneRecipeById(@Param('id') id: string) {
    console.log('One receipe fetched with id: ' + id);
    return this.recipesService.getOneRecipe(+id);
  }
}
