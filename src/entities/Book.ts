import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  title!: string;

  @Column('text')
  description!: string;

  @Column('text')
  author!: string;

  @Column('boolean')
  isPublished!: boolean;
}
