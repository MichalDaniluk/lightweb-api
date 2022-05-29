import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dtos/create-post.dto';
import { EditClientDto } from './dtos/edit-post.dto';
import { Client } from './clients.model';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('/')
  getAllPosts() {
    return this.clientsService.getAll();
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    return this.clientsService.findOne(parseInt(id));
  }

  @Post()
  addPost(@Body() body: CreateClientDto) {
    this.clientsService.add(body);
  }

  @Delete('/:id')
  @HttpCode(204)
  deletePost(@Param('id') id: string) {
    this.clientsService.remove(+id);
  }

  //  @Patch('/:id')
  //  editPost(@Body() body: EditPostDto, @Param('id') id: string): MyPost {
  //    //return this.postsService.edit(+id, body);
  //  }
}
