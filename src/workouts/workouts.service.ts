import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Workout } from '@prisma/client';
import { CreateWorkoutRequest } from './request/create-workout.request';

@Injectable()
export class WorkoutsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWorkouts(): Promise<Workout[]> {
    console.log('GET all workouts');
    return this.prismaService.workout.findMany({ where: { userId: null } });
  }

  async getAllUserWorkouts(id: number): Promise<Workout[]> {
    console.log('GET all user workouts');
    return this.prismaService.workout.findMany({ where: { userId: id } });
  }

  async getOneWorkout(id: number): Promise<Workout> {
    console.log('GET workout with id ' + id);
    return this.prismaService.workout.findUnique({ where: { id: id } });
  }

  async createWorkout(
    createWorkoutRequest: CreateWorkoutRequest,
  ): Promise<Workout> {
    const { userId, name, exercises } = createWorkoutRequest;

    const workout = this.prismaService.workout.create({
      data: {
        userId,
        name,
        exercises,
      },
    });
    return workout;
  }
}
