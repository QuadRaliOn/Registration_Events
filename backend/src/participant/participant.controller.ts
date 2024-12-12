import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantDto } from './participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  create(@Body() dto: ParticipantDto) {
    return this.participantService.create(dto);
  }

  @Get()
  findAll() {
    return this.participantService.findAll();
  }

  @Get('event/:id')
  findMany(@Param('id') id: string) {
    return this.participantService.findMany(id);
  }


  @Get('event/:id/:searchString')
  findFiltered(@Param('id') id: string, @Param('searchString') searchString: string) {
    return this.participantService.findFiltered(id, searchString);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participantService.findOne(+id);
  }

  @Get('registrations/:eventId')
  getRegistrationsPerDay(@Param('eventId') eventId: string) {
   return this.participantService.getRegistrationsByDay(eventId);
 }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: ParticipantDto) {
    return this.participantService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantService.remove(id);
  }
}
