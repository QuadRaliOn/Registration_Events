import { IsString } from 'class-validator';

export class OrganizerDto {
  @IsString()
  id: string;

  @IsString()
  name: string;
}
