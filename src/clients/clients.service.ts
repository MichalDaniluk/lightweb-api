import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Client } from './clients.model';
import { EditClientDto } from './dtos/edit-post.dto';
import { CreateClientDto } from './dtos/create-post.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  getAll() {
    return this.clientRepository.find();
  }

  findOne(id: number): Promise<Client> {
    return this.clientRepository.findOne(id);
  }

  add(client: CreateClientDto): void {
    //posts.push(post);
  }

  async remove(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }

  edit(id: number, client: EditClientDto) {
    //const item = posts.find((p) => p.getId() === id);
    //item.setTitle(post.title);
    //item.setBody(post.body);
    //return item;
  }
}
