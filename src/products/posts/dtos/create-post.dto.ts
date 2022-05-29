import { Post } from '../post.model';
import { IsString } from 'class-validator';

export class CreatePostDto extends Post {
  @IsString()
  title: string;

  @IsString()
  body: string;
}
