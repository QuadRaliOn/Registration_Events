import { Injectable } from '@nestjs/common';
import { ParticipantDto } from './participant.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ParticipantService {
  constructor(private prisma: PrismaService) {}

  create(dto: ParticipantDto) {
    return this.prisma.participant.create({
      data: dto,
    });
  }

  findAll() {
    // return this.prisma.participant.findMany({
    //   include: { event: true },
    // });
    return [{example: 'string'}]
  }

  findMany(eventId: string) {
    return this.prisma.participant.findMany({
      where: { eventId: eventId },
      include: { event: true },
    });
  }

  findFiltered(eventId: string, searchString: string) {
    return this.prisma.participant.findMany({
      where: {
        eventId: eventId,
        OR: [
          { firstName: { contains: searchString, mode: 'insensitive' } },
          { lastName: { contains: searchString, mode: 'insensitive' } },
          { email: { contains: searchString, mode: 'insensitive' } },
        ],
      },
      include: { event: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  update(id: string, dto: ParticipantDto) {
    return `This action updates a #${id} participant ${dto}`;
  }

  remove(id: string) {
    return this.prisma.participant.delete({
      where: { id: id },
    });
  }

   async getRegistrationsByDay(eventId: string) {
    const registrations = await this.prisma.participant.groupBy({
      by: ['createdAt'],
      where: { eventId },
      _count: {
        _all: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });


    return registrations.map(reg => ({
      date: reg.createdAt.toISOString().split('T')[0],
      registrations: reg._count._all,
    }));

  }
}
