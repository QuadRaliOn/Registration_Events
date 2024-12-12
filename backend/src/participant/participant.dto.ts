import { IsString } from 'class-validator';

export class ParticipantDto {
  @IsString()
  id: string;

  @IsString()
  createdAt: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  birthDate: string;

  @IsString()
  source: string;

  @IsString()
  eventId: string;
}
