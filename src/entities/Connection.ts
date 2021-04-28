import {Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn, OneToOne, ManyToMany } from "typeorm"
import { v4 as uuid} from "uuid" //isso para visualizar melhor a nomeclatura do nome
import { User } from "./Users";

@Entity("connections")
class Connection{
  @PrimaryColumn()
  id:string;

  @Column()
  admin_id:string;
  
  @Column()
  socket_id:string;

  @JoinColumn({ name:"user_id"})
  @ManyToOne(() => User)
  user:User;

  @Column()
  user_id:string;
  
  @CreateDateColumn()
  created_at:Date;

  @CreateDateColumn()
  updated_at:Date;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}
export {Connection}