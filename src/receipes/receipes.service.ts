import { CreateReceipeDto } from './dto/create-receipe.dto';
import { Injectable } from '@nestjs/common';
import { Receipe } from './entities/receipe.entity';
import { UpdateReceipeDto } from './dto/update-receipe.dto';

@Injectable()
export class ReceipesService {
  private receipes: Receipe[] = [
    {
      receipeId: 1,
      name: 'Pancakes',
      type: 'Breakfast',
      calories: 300,
      photo:
        'https://d3iamf8ydd24h9.cloudfront.net/pictures/articles/2019/08/1066536-v-1500x1500.jpg',
      ingredients: 'milk, eggs, wheat oat, oil',
      description: 'Mix all and put on frying pan',
    },
    {
      receipeId: 2,
      name: 'Sandwiches',
      type: 'Second Breakfast',
      calories: 400,
      photo:
        'https://akademiasmaku.pl/upload/recipes/1136/kanapki-pielgrzyma-1136.jpg',
      ingredients: 'bread, ham, butter',
      description: 'Cut the bread, put on bread some butter and ham',
    },
    {
      receipeId: 3,
      name: 'Spaghetti',
      type: 'Dinner',
      calories: 500,
      photo:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/spaghetti_bolognese_01.jpg',
      ingredients: 'noodles, chicken, tomatoes',
      description:
        'Boil the water for noodles, put them inside, put chicken and tomatoes on frying pan, mix all',
    },
    {
      receipeId: 4,
      name: 'Cake',
      type: 'Tea',
      calories: 600,
      photo:
        'https://staticsmaker.iplsc.com/smaker_production_2022_04_22/6e1a433da66fa7a6f423122caa5eb1e9-content.jpg',
      ingredients: 'milk, eggs, wheat oat, oil',
      description: 'Mix all and put to oven',
    },
    {
      receipeId: 5,
      name: 'Soup',
      type: 'Supper',
      calories: 700,
      photo:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/zupa-meksykanska-z-batatami-kurczakiem-soczewica-00.jpg',
      ingredients: 'chicken, carrot, potatoes, onion',
      description: 'Cut everything and put it to the boiling water',
    },
    {
      receipeId: 6,
      name: 'Oats with milk',
      type: 'Supper',
      calories: 800,
      photo:
        'https://polki.pl/foto/4_3_LARGE/platki-sniadaniowe-i-mleko-niebianskie-polaczenie-2228265.jpg',
      ingredients: 'milk, oats',
      description: 'Mix all',
    },
  ];

  create(createReceipeDto: CreateReceipeDto) {
    const receipe = {
      receipeId: this.receipes.length + 1,
      ...createReceipeDto,
    };
    this.receipes.push(receipe);
    return true;
  }

  findAll() {
    return this.receipes;
  }

  async findOne(name: string): Promise<Receipe | undefined> {
    return this.receipes.find((receipe) => receipe.name === name);
  }

  async findOneById(id: number): Promise<Receipe | undefined> {
    return this.receipes.find((receipe) => receipe.receipeId === id);
  }

  update(id: number, updateReceipeDto: UpdateReceipeDto) {
    return `This action updates a #${id} receipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipe`;
  }
}
