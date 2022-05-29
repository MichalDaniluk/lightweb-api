import { Client } from '../clients.model';
import { IsNumber, IsString } from 'class-validator';

export class CreateClientDto extends Client {
  @IsNumber({}, { message: 'Id musi byc liczba' })
  id: number;

  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsString()
  date: string;
}
