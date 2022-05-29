import { IsString } from 'class-validator';

export class EditPostDto {
  @IsString()
  title: string;

  @IsString()
  body: string;
}
