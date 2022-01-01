import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Post } from './post.entity';
import { PostsController } from './posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), UsersModule],
  providers: [],
  controllers: [PostsController],
})
export class PostsModule {}
