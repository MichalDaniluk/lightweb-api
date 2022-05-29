import { IsString } from 'class-validator';

export class EditClientDto {
  @IsString()
  title: string;

  @IsString()
  body: string;
}
