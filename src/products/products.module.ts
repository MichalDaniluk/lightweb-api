import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './products.service';
import { PostsService } from './posts/posts.service';
import { ProductsController } from './products.controller';
import { Product } from './product.entity';
import { Post } from './posts/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Post])],
  controllers: [ProductsController],
  providers: [ProductsService, PostsService],
})
export class ProductsModule {}
