import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMeasurementRequest } from './request/create-measurement.request';
import { Measurement } from '@prisma/client';
import { DeleteMeasurementRequest } from './request/delete-measurement.request';

@ApiTags('measurements')
@Controller('measurements')
export class MeasurementsController {
  constructor(private readonly measurementsService: MeasurementsService) {}

  @ApiResponse({
    description: 'Measurement',
  })
  @Get(':id')
  findOneMeasurementById(@Param('id') id: number) {
    console.log('One measurement fetched with id: ' + id);
    return this.measurementsService.getOneMeasurement(+id);
  }

  @ApiResponse({
    description: 'User measurements',
  })
  @Get('user/:id')
  findUserMeasurements(@Param('id') id: number): Promise<Measurement[]> {
    console.log('User measurements fetched with userId ' + id);
    return this.measurementsService.getUserMeasurements(id);
  }

  @ApiCreatedResponse({
    description: 'Measurement has been created',
  })
  @ApiBadRequestResponse({
    description: 'Measurement has not been created',
  })
  @Post('/create-measurement')
  addMeasurement(@Body() createMeasurementRequest: CreateMeasurementRequest) {
    this.measurementsService.createMeasurement(createMeasurementRequest);
  }

  //TODO FIX
  @Delete('/delete-measurement')
  removeMeasurement(
    @Body() deleteMeasurementRequest: DeleteMeasurementRequest,
  ) {
    this.measurementsService.deleteMeasurement(deleteMeasurementRequest);
  }
}
