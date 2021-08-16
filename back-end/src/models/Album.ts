import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
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



}