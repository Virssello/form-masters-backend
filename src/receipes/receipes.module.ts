import { Module } from '@nestjs/common';
import { ReceipesService } from './receipes.service';
import { ReceipesController } from './receipes.controller';

@Module({
  controllers: [ReceipesController],
  providers: [ReceipesService],
})
export class ReceipesModule {}
