import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { PostsService } from './posts/posts.service';
//import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  private postsService;

  constructor(prodService: ProductsService, postService: PostsService) {
    this.postsService = postService;
  }

  //  @Get()
  //  findAll() {
  //    return this.productsService.getAll();
  //  }

  //  @Get(':id')
  //  findOne(@Param('id') id: string) {
  //    return this.productsService.findOne(+id);
  //  }

  //  @Patch(':id')
  //  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //    return this.productsService.update(+id, updateProductDto);
  //  }

  //  @Delete(':id')
  //  remove(@Param('id') id: string) {
  //    return this.productsService.remove(+id);
  //  }

  @Get('posts')
  findAllPosts() {
    return this.postsService.getAll();
  }
}
