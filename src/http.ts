import express from 'express';//tres pontinhos quer dizer que esta com tipagem separada
import './database';
import { routes } from "./routes"
import { createServer } from "http"
import {Server, Socket} from "socket.io"
import path from "path"

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html")
})

const http = createServer(app) //criando protocolo http
const io = new Server(http); //criando protoloco ws

io.on("connection", (socket: Socket) =>{
  console.log("se conectou", socket.id)
})//momento onde vai se conectar de fato com ws

app.use(express.json());

app.use(routes);

export {http, io};