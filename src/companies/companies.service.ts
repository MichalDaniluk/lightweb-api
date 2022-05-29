import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';

import { Company } from './company.model';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  //  create(createProductDto: CreateProductDto) {
  //    return 'This action adds a new product';
  //  }

  getAll() {
    return this.companyRepository.find();
  }

  findOne(id: number): Promise<Company> {
    return this.companyRepository.findOne(id);
  }

  //  update(id: number, updateProductDto: UpdateProductDto) {
  //    return `This action updates a #${id} product`;
  //  }

  async remove(id: number): Promise<void> {
    await this.companyRepository.delete(id);
  }
}
