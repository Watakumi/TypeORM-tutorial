import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('users/:userId/posts')
export class PostsController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll(@Param(':userId') userId: string): Promise<User> {
    return this.usersService.findOneWithPosts(userId);
  }
}
