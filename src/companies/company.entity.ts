import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

import { Project } from '../projects/project.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  date: string;

  @ApiProperty()
  description: string;

  @OneToMany(() => Project, (project) => project.id)
  project: Project[];
}
