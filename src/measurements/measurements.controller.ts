import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMeasurementRequest } from './request/create-measurement.request';

@ApiTags('measurements')
@Controller('measurements')
export class MeasurementsController {
  constructor(private readonly measurementsService: MeasurementsService) {}

  @Get(':id')
  findOneMeasurementById(@Param('id') id: number) {
    console.log('One measurement fetched with id: ' + id);
    return this.measurementsService.getOneMeasurement(+id);
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
}
