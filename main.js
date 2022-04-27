const inputMessage = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");
const user = document.getElementById("username");
const guestName = "Guest" + parseInt(Math.random() * 5000000);

inputMessage.addEventListener("keypress", (e) => {
  if (inputMessage.value.trim() === "/clear") {
    chatBox.innerText = "";
    inputMessage.value = "";
  } else if (e.key === "Enter" && inputMessage.value.trim()) {
    let message = JSON.stringify({
      user: username.value || guestName,
      msg: inputMessage.value,
      type: "chatMessage",
    });
    const data = {
      meta: "send_message",
      roomID: "room_1",
      clientID: "Albert",
      message: inputMessage.value,
    };
    socket.send(JSON.stringify(data));
    console.log("message", inputMessage.value);
    inputMessage.value = "";
  }
});

const buttonCreateRoom = document.getElementById("createRoom");
buttonCreateRoom.addEventListener("click", () => {
  const data = {
    meta: "create_room",
    roomID: "room_1",
    clientID: "Albert",
    message: "",
  };
  socket.send(JSON.stringify(data));
});

const buttonJoinRoom = document.getElementById("joinRoom");
buttonJoinRoom.addEventListener("click", () => {
  const data = {
    meta: "join_room",
    roomID: "room_1",
    clientID: "Albert",
    message: "",
  };
  socket.send(JSON.stringify(data));
});

// sockets things
const socket = new WebSocket("ws://192.168.210.154:8000");
// const socket = new WebSocket("ws://localhost:8000");
// const socket = new WebSocket("ws://groupem.herokuapp.com");

socket.onopen = () => {
  console.log("Connected to server");
  let message = JSON.stringify({
    type: "connection",
  });

  // socket.send(message);
  //socket.onmessage({ data: socket.localAddress });
};

socket.onmessage = (message) => {
  let data = JSON.parse(message.data);
  console.log(data);
  // const data = JSON.parse(message.data);
  // let newMessageElement;
  // // if (data.msg.includes("http://") || data.msg.includes("https://")) {
  // //   newMessageElement = document.createElement("a");
  // //   newMessageElement.classList.add("ws__link");
  // //   newMessageElement.href = data.msg;
  // //   newMessageElement.target = "_blank";
  // // } else {
  // // }
  // newMessageElement = document.createElement("div");
  // newMessageElement.classList.add("ws__chat-message");
  // let userProfileElement = document.createElement("span");
  // userProfileElement.textContent = data.user;
  // userProfileElement.classList.add("ws__user-name");
  // newMessageElement.append(
  //   userProfileElement,
  //   `: ${data.msg}` ?? "El mensaje no ha llegado correctamente"
  // );
  // chatBox.appendChild(newMessageElement);
  // chatBox.scrollTop = chatBox.scrollHeight;
};

// setInterval(() => {
//   console.log("connecting");
//   socket.send("pong");
// }, 1000);
