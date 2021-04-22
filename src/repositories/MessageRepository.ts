import { EntityRepository, Repository} from "typeorm"
import { Message } from "../entities/Message"

@EntityRepository(Message)
class MessageRepository extends Repository <Message> {

}
//extende um metodo de uma classe para a nova classe

export {MessageRepository}