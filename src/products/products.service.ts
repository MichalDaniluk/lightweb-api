import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  //  create(createProductDto: CreateProductDto) {
  //    return 'This action adds a new product';
  //  }

  getAll() {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  //  update(id: number, updateProductDto: UpdateProductDto) {
  //    return `This action updates a #${id} product`;
  //  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
