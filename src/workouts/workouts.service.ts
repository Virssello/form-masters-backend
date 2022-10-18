import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Injectable } from '@nestjs/common';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workout } from './entities/workout.entity';

@Injectable()
export class WorkoutsService {
  private workouts: Workout[] = [
    {
      workoutId: 1,
      name: 'Push',
      excercises: 'Chest press barebell, chest press dumbbel',
      series: '5, 5, 5',
      reps: '5, 10, 8',
    },
    {
      workoutId: 2,
      name: 'Pull',
      excercises: 'Pull-ups, barbell row, seated row',
      series: '5, 5, 5',
      reps: '5, 10, 8',
    },
    {
      workoutId: 3,
      name: 'Legs',
      excercises: 'Squats, deadlift, leg press',
      series: '5, 5, 5',
      reps: '5, 10, 8',
    },
    {
      workoutId: 4,
      name: 'FBW version 1',
      excercises: 'Chest press barebell, pull-ups, squats',
      series: '5, 5, 5',
      reps: '5, 10, 8',
    },
    {
      workoutId: 5,
      name: 'FBW version 2',
      excercises: 'Chest press dumbbel, barbell row, deadlift',
      series: '5, 5, 5',
      reps: '5, 10, 8',
    },
    {
      workoutId: 6,
      name: 'FBW version 3',
      excercises: 'Shoulder press, seated row, leg press',
      series: '5, 5, 5',
      reps: '5, 10, 8',
    },
  ];

  create(createWorkoutDto: CreateWorkoutDto) {
    return 'This action adds a new workout';
  }

  findAll() {
    return this.workouts.map(({ workoutId, ...workout }) => workout);
  }

  async findOne(name: string): Promise<Workout | undefined> {
    return this.workouts.find((workout) => workout.name === name);
  }

  async findOneById(id: number): Promise<Workout | undefined> {
    return this.workouts.find((workout) => workout.workoutId === id);
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
