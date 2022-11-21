import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupRequest {
  @ApiProperty({
    description: 'Username - max length 20 letters',
    example: 'username',
  })
  @IsNotEmpty()
  // alphanumeric characters and - are valid
  // you can change this as you like
  @Matches(RegExp('^[a-zA-Z0-9\\-]+$'))
  @MaxLength(20)
  username: string;

  @ApiProperty({
    description: 'Password - min length 8 letters',
    example: 'password',
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Sex - male/female',
    example: 'male',
  })
  @IsNotEmpty()
  @MinLength(8)
  sex: string;

  @ApiProperty({
    description: 'Age',
    example: 18,
  })
  @IsNotEmpty()
  @MinLength(8)
  age: number;
}
