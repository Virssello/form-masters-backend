import { PartialType } from '@nestjs/mapped-types';
import { CreateReceipeDto } from './create-receipe.dto';

export class UpdateReceipeDto extends PartialType(CreateReceipeDto) {}
