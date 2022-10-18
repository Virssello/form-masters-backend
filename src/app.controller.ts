import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/Public';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @Get()
  doGet() {
    return 'Hello world';
  }
}
