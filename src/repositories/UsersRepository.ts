import { EntityRepository, Repository} from "typeorm"
import { User } from "../entities/Users";

@EntityRepository(User)
class UsersRepository extends Repository<User>{
  static save(user: void) {
    throw new Error("Method not implemented.");
  }
  static create(arg0: { email: string; }) {
    throw new Error("Method not implemented.");
  }
}
export { UsersRepository }

