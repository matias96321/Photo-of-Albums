import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import Image from './Image';
import User from './User';

@Entity('Album')
export default class Album {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(()=> User, user => user.albums)
  @JoinColumn({name: 'user_id'})
  user: User;

  @OneToMany(()=> Image, image => image.album, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'album_id'})
  image: Image[]



}