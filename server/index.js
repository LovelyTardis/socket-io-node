import { WebSocketServer } from "ws";

const socket = new WebSocketServer({ port: 3000 });

socket.on("connection", (wsocket) => {
  // send a message to the client
  wsocket.send("Hello Client");

  // receive a message from the client
  wsocket.on("message", (data) => {
    const packet = JSON.parse(data);

    switch (packet.type) {
      case "hello from client":
        // ...
        break;
    }
  });
});
