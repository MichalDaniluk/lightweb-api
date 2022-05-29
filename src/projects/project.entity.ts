import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Company } from '../companies/company.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  created_at: string;

  @ApiProperty()
  body: string;

  @ManyToOne(() => Company, (company) => company.id)
  company: Company[];
}
