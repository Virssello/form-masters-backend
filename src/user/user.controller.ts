import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOneUserById(@Param('id') id: number) {
    console.log('One user fetched with id: ' + id);
    return this.userService.getOneUser(+id);
  }
}
