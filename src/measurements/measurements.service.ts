import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Measurement } from '@prisma/client';
import { CreateMeasurementRequest } from './request/create-measurement.request';

@Injectable()
export class MeasurementsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getOneMeasurement(id: number): Promise<Measurement> {
    console.log('GET user with id ' + id);
    return this.prismaService.measurement.findUnique({ where: { id: id } });
  }

  async createMeasurement(
    createMeasurementRequest: CreateMeasurementRequest,
  ): Promise<Measurement> {
    const { userId, weight, neck, chest, stomach, hips, biceps, calf, waist } =
      createMeasurementRequest;
    const measurement = this.prismaService.measurement.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        weight,
        neck,
        chest,
        stomach,
        hips,
        biceps,
        calf,
        waist,
      },
    });
    console.log('POST measurement with data: ' + measurement);
    return measurement;
  }
}