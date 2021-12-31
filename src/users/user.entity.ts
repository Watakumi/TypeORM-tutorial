import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
