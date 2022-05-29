import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
//import { EditPostDto } from './dtos/edit-post.dto';
//import { Post as MyPost } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  getAllPosts() {
    return this.postsService.getAll();
  }

  //  @Get('/:id')
  //  getPost(@Param('id') id: string) {
  //    return this.postsService.findOne(parseInt(id));
  //  }

  @Post()
  addPost(@Body() body: CreatePostDto) {
    return this.postsService.create(body);
  }

  @Delete('/:id')
  @HttpCode(204)
  deletePost(@Param('id') id: string) {
    this.postsService.remove(+id);
  }

  //  @Patch('/:id')
  //  editPost(@Body() body: EditPostDto, @Param('id') id: string): MyPost {
  //    //return this.postsService.edit(+id, body);
  //  }
}
