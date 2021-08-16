import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity('Image')
export default class Image {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  size: string;

  @Column()
  color: string;

  @Column()
  album_id: number;
}