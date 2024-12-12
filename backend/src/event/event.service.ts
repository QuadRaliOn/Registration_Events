import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EventDto } from './event.dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async create(dto: EventDto) {
    return this.prisma.event.create({
      data: {
        title: dto.title,
        description: dto.description,
        date: dto.date,
        organizerId: dto.organizerId,
        participants: {
          create: dto.participants || [],
        },
      },
    });
  }
  findAll() {
    return this.prisma.event.findMany({
      include: {
        organizer: true,
        participants: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.event.findUnique({
      where: { id: id },
      include: {participants: true}
    });
  }

  update(id: string, dto: EventDto) {
    return `This action updates a #${id} event ${dto}`;
  }

  async remove(id: string) {
    await this.prisma.participant.deleteMany({
      where: { eventId: id },
    });

    return this.prisma.event.delete({
      where: { id },
    });
  }
}
