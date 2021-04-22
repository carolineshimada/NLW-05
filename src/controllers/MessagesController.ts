import { Request, Response } from "express";
import { MessagesService } from "../services/MesagesService";

class MessagesController {
  async create(request:Request, response:Response){
  const { admin_id, text, user_id} = request.body;//desestruturação
  
  const messagesService = new MessagesService();
    const message = await messagesService.create({
      admin_id, 
      text, 
      user_id
    })
    return response.json(message)
  }
  async showByUser(request:Request, response:Response){
    const {id} = request.params;
    const messagesService = new MessagesService();
    const list = await messagesService.listByUser(id)
    return response.json(list)
  }
}
export { MessagesController }