import { EntityRepository, Repository} from "typeorm"
import { Connection } from "../entities/Connection"

@EntityRepository(Connection)
class ConnectionsRepository extends Repository <Connection> {

}
//extende um metodo de uma classe para a nova classe

export {ConnectionsRepository}