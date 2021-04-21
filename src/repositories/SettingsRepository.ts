import { EntityRepository, Repository} from "typeorm"
import { Setting } from "../entities/Setting"

@EntityRepository(Setting)
class SettingsRepository extends Repository <Setting> {}
//extende um metodo de uma classe para a nova classe

export {SettingsRepository}