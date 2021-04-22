import {getCustomRepository, Repository} from "typeorm"
import {SettingsRepository} from "../repositories/SettingsRepository"
import {Setting} from "../entities/Setting"

interface ISettingsCreate{
  chat:boolean;
  username:string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;
  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
    async create({chat, username} : ISettingsCreate){

        const userAlreadyExists = await this.settingsRepository.findOne({
          username
        })
        if(userAlreadyExists){
          throw new Error("user already exists =]")
        }
        
        const settings = this.settingsRepository.create({
        chat, 
        username
        })
        await this.settingsRepository.save(settings)
    }
}
export { SettingsService }