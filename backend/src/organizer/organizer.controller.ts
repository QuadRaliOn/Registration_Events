import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizerService } from './organizer.service';
import { OrganizerDto } from './organizer.dto';
@Controller('organizer')
export class OrganizerController {
  constructor(private readonly organizerService: OrganizerService) {}

  @Post()
  create(@Body() dto: OrganizerDto) {
    return this.organizerService.create(dto);
  }

  @Get()
  findAll() {
    return this.organizerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: OrganizerDto) {
    return this.organizerService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizerService.remove(id);
  }
}
