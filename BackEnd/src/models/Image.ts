import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Album from './Album';

@Entity('Images')
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
  firebase_url: string;

  @ManyToOne(()=> Album, album => album.image,{eager: true})
  @JoinColumn({name: 'album_id'})
  album: Album;

}