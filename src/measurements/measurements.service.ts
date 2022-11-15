import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { Measurement } from '@prisma/client';
import { CreateMeasurementRequest } from './request/create-measurement.request';

@Injectable()
export class MeasurementsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getOneMeasurement(id: number): Promise<Measurement> {
    console.log('GET measurement successful');
    return this.prismaService.measurement.findUnique({
      where: { id: id },
    });
  }

  async getUserMeasurements(id: number): Promise<Measurement[]> {
    const measurement = this.prismaService.measurement.findMany({
      where: {
        userId: id,
      },
    });
    console.log('GET userMeasurement successful');
    return measurement;
  }

  async createMeasurement(
    createMeasurementRequest: CreateMeasurementRequest,
  ): Promise<Measurement> {
    const { userId, weight, neck, chest, stomach, hips, biceps, calf, waist } =
      createMeasurementRequest;
    const measurement = this.prismaService.measurement.create({
      data: {
        userId: userId,
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
    console.log('POST measurement successful');
    return measurement;
  }
}
