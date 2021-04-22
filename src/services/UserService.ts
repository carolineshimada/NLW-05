import { getCustomRepository, Repository} from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"
import { User } from "../entities/Users";



class UsersServices{
  private usersRepository: Repository<User>;
  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository)
  }

    async create(email:string){
      
      const userExists = await this.usersRepository.findOne({
        email
      });
      if(userExists){
        return userExists
      }
      const user = this.usersRepository.create({
        email
      });
      await this.usersRepository.save(user);
      return user;
    }
}
export {UsersServices}