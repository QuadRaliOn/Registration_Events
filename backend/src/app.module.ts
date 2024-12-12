import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventModule } from './event/event.module';
import { PrismaService } from './prisma.service';
import { OrganizerModule } from './organizer/organizer.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [EventModule, OrganizerModule, ParticipantModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
