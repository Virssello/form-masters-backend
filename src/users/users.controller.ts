import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateMealDto } from './dto/create-meal-dto';
import { CreateMeasurementDto } from './dto/create-measurement-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.findOneById(req.user.userId);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post(':id/meals')
  addMeal(@Param('id') id: string, @Body() createMealDto: CreateMealDto) {
    this.usersService.addMeal(+id, createMealDto);

    return this.usersService.findOneById(+id);
  }

  @Post(':id/measurement')
  addMeasurement(
    @Param('id') id: string,
    @Body() createMeasurementDto: CreateMeasurementDto,
  ) {
    this.usersService.addMeasurement(+id, createMeasurementDto);

    return this.usersService.findOneById(+id);
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
