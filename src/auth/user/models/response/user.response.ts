import type { User } from '@prisma/client';

export class UserResponse {
  id: number;
  username: string;
  age: number;
  gender: string;
  calories: number;

  static fromUserEntity(entity: User): UserResponse {
    const response = new UserResponse();
    response.id = entity.id;
    response.username = entity.username;
    response.age = entity.age;
    response.gender = entity.gender;
    response.calories = entity.calories;
    return response;
  }
}
