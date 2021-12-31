import { Post } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  age: number;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
