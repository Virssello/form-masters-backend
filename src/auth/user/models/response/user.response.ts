import type { User } from '@prisma/client';

export class UserResponse {
  id: number;
  username: string;
  age: number;
  sex: string;

  static fromUserEntity(entity: User): UserResponse {
    const response = new UserResponse();
    response.id = entity.id;
    response.username = entity.username;
    response.age = entity.age;
    response.sex = entity.sex;
    return response;
  }
}
