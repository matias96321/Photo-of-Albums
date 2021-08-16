import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Album from './Album';
@Entity('users')
export default class User {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Album, album => album.user, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'user_id'})  
  albums: Album[]

}