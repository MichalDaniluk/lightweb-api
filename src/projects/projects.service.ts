import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Project } from './project.model';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  //  create(createProductDto: CreateProductDto) {
  //    return 'This action adds a new product';
  //  }

  getAll() {
    return this.projectRepository.find();
  }

  findOne(id: number): Promise<Project> {
    return this.projectRepository.findOne(id);
  }

  //  update(id: number, updateProductDto: UpdateProductDto) {
  //    return `This action updates a #${id} product`;
  //  }

  async remove(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
