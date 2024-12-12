import { ParticipantDto } from 'src/participant/participant.dto';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { OrganizerDto } from 'src/organizer/organizer.dto';
import { Type } from 'class-transformer';

export class EventDto {
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  date: Date;

  @ValidateNested()
  @Type(() => OrganizerDto)
  organizer: OrganizerDto;

  @IsString()
  organizerId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParticipantDto)
  participants: ParticipantDto[];
}
