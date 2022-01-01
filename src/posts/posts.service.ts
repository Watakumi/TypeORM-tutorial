import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './create-post.dto';
import { Post } from './post.entity';
import { UpdatePostDto } from './update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postsRepository: Repository<Post>,
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findOne(id: string): Promise<Post> {
    const post = await this.postsRepository.findOne(id, {
      relations: ['user'],
    });
    if (!post) {
      throw new NotFoundException(`Post #${id} is not found`);
    }
    return post;
  }

  async create(userId: string, createPostDto: CreatePostDto): Promise<Post> {
    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      throw new NotFoundException(`User #${userId} is not found`);
    }
    const post = this.postsRepository.create({
      ...createPostDto,
      user,
    });
    return this.postsRepository.save(post);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = await this.postsRepository.preload({
      id: +id,
      ...updatePostDto,
    });
    if (!post) {
      throw new NotFoundException(`Post #${id} is not found`);
    }
    return this.postsRepository.save(post);
  }

  async remove(id: string): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
