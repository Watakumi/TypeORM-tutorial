import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('text')
  description: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
