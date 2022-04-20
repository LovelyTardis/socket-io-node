const socket = new WebSocket("ws://localhost:3000");

socket.onmessage = ({ data }) => {
  console.log("Mensaje de ", data);
};
