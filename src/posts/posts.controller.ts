import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './create-post.dto';
import { Post as PostEntity } from './post.entity';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './update-post.dto';

@Controller('users/:userId/posts')
export class PostsController {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,
  ) {}
  @Get()
  findAll(@Param('userId') userId: string): Promise<User> {
    return this.usersService.findOneWithPosts(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Post()
  create(
    @Param('userId') userId: string,
    @Body() createPostDto: CreatePostDto,
  ): Promise<PostEntity> {
    return this.postsService.create(userId, createPostDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostEntity> {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.postsService.remove(id);
  }
}
