import { Injectable } from '@nestjs/common';
import { OrganizerDto } from './organizer.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrganizerService {
  constructor(private prisma: PrismaService) {}

  create(dto: OrganizerDto) {
    return this.prisma.organizer.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.organizer.findMany({
      include: { events: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} organizer`;
  }

  update(id: string, dto: OrganizerDto) {
    return `This action updates a #${id} organizer ${dto}}`;
  }

  async remove(id: string) {
    await this.prisma.event.deleteMany({
      where: {organizerId: id}
    })

    return this.prisma.organizer.delete({
      where: { id },
    });
  }
}
