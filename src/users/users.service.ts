import { CreateMealDto } from './dto/create-meal-dto';
import { CreateMeasurementDto } from './dto/create-measurement-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const user = {
      userId: this.users.length + 1,
      ...createUserDto,
      meals: [],
      measurements: [],
    };

    this.users.push(user);

    return true;
  }

  findAll() {
    return this.users.map(({ password, ...user }) => user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findOneById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.userId === id);
  }

  async addMeal(id: number, createMealDto: CreateMealDto) {
    console.log(createMealDto);
    console.log(id);

    this.users = this.users.map((user) =>
      user.userId === id
        ? {
            ...user,
            meals: [...user.meals, createMealDto],
          }
        : user,
    );

    console.log(this.users);

    return true;
  }

  async addMeasurement(id: number, createMeasurementDto: CreateMeasurementDto) {
    console.log(createMeasurementDto);
    console.log(id);

    this.users = this.users.map((user) =>
      user.userId === id
        ? {
            ...user,
            measurements: [...user.measurements, createMeasurementDto],
          }
        : user,
    );

    console.log(this.users);

    return true;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
