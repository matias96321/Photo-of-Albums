import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Album from './Album';


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

  @ManyToOne(()=> Album, album => album.image)
  @JoinColumn({name: 'album_id'})
  album: Album;
}