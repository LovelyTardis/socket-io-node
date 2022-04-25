import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: process.env.PORT || 3456 });
console.log("server started on port", process.env.PORT);
//DATADECODER
const decoder = new TextDecoder("utf-8");
//wss = WebsocketServer
//ws = WebsocketConnexion

wss.on("connection", (wsc, req) => {
  //console.log("Persona " + req.socket.localAddress + " se ha conectado");
  wsc.on("message", (data) => {
    let clientMessage = JSON.parse(decoder.decode(data));
    switch (clientMessage.type) {
      case "connection":
        console.log("User: " + req.socket.remoteAddress);
        break;
      case "chatMessage":
        wss.broadcast(clientMessage, req);
        break;
      default:
        break;
    }
    // console.log(clientMessage.type);
  });
});

wss.broadcast = function broadcast(data, req) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(data));
  });
};
