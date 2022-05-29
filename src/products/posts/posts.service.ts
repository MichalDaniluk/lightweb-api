import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto } from './dtos/create-post.dto';
//import { UpdateProductDto } from './dto/update-product.dto';

import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const post = new Post();
    post.title = createPostDto.title;
    post.body = createPostDto.body;
    await this.postsRepository.manager.save([post]);
  }

  getAll() {
    return this.postsRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postsRepository.findOne(id);
  }

  //  update(id: number, updateProductDto: UpdateProductDto) {
  //    return `This action updates a #${id} product`;
  //  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
