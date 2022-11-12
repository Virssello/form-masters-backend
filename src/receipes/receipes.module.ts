import { Module } from '@nestjs/common';
import { ReceipesService } from './receipes.service';
import { ReceipesController } from './receipes.controller';
import { PrismaModule } from '../common/services/prisma/prisma.module';

@Module({
  controllers: [ReceipesController],
  providers: [ReceipesService],
  imports: [PrismaModule],
})
export class ReceipesModule {}
