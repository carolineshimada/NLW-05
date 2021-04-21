import {Entity, Column, CreateDateColumn, UpdateDateColumn,PrimaryColumn, } from "typeorm";
import { v4 as uuid} from "uuid" //isso para visualizar melhor a nomeclatura do nome

@Entity("settings")
class Setting {

  @PrimaryColumn()
  id:string;

  @Column()
  username:string;

  @Column()
  chat:boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  created_at: Date;

  constructor(){ //metodo chamado para cada vez que chama new Settings
    if(!this.id){
      this.id = uuid();
    }
  }
}
export { Setting }