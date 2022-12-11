import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateWorkoutRequest } from './request/create-workout.request';

@ApiTags('workouts')
@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get()
  findAllWorkouts() {
    console.log('All workouts fetched');
    return this.workoutsService.getAllWorkouts();
  }

  @Get('/user/:id')
  findAllUserWorkouts(@Param('id') id: number) {
    console.log('All user ' + id + ' workouts fetched');
    return this.workoutsService.getAllUserWorkouts(+id);
  }

  @Get(':id')
  findOneWorkoutById(@Param('id') id: number) {
    console.log('One workout fetched with id: ' + id);
    return this.workoutsService.getOneWorkout(+id);
  }

  @ApiCreatedResponse({
    description: 'Workout has been created',
  })
  @ApiBadRequestResponse({
    description: 'Workout has not been created',
  })
  @Post('/create-workout')
  addMeasurement(@Body() createWorkoutRequest: CreateWorkoutRequest) {
    this.workoutsService.createWorkout(createWorkoutRequest);
  }
}
