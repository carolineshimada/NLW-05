import {io} from "../http"
import {ConnectionsService} from "../services/ConnectionsService"
import {UsersServices} from "../services/UserService"
import {MessagesService} from "../services/MesagesService"

interface IParams{
  text: string;
  email:string;
}
io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersServices = new UsersServices();
  const messagesServices = new MessagesService();
  let user_id = null;

  socket.on("client_first_access", async(params) => {
    const socket_id = socket.id;
    const {text, email} = params;

    const userExists = await usersServices.findByEmail(email);
    if(!userExists){
      const user = await usersServices.create(email);
      await connectionsService.create({
        socket_id,
        user_id: user.id
      });
      user_id = user.id;
    } else {
      const connection = await connectionsService.findByUserId(userExists.id);
      if(!connection){
        await connectionsService.create({
          socket_id,
          user_id:userExists.id
        });
      } else {
        user_id = userExists.id;
        connection.socket_id = socket_id;
        await connectionsService.create(connection)
      }
    }
    await messagesServices.create({
      text,
      user_id
    })
  });
})
    
    //salvar a conexão com o socket_id e user_id
