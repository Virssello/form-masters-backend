import { Meal } from './meal.entity';
import { Measurement } from './measurement.entity';

export class User {
  userId: number;
  username: string;
  password: string;
  meals: Meal[];
  measurements: Measurement[];
}
