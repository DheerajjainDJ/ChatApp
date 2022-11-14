import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { addUser, removeUser, getUser, usersInARoom } from "./utils/users.js";
import { sendMessage, sendLocation } from "./utils/messageUtils.js";

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    socket.join(user.userRoom);
    socket.emit(
      "message",
      sendMessage(
        "admin",
        `Hello ${user.userName}! Welcome to the room : ${user.userRoom}`
      )
    );

    socket.broadcast
      .to(user.userRoom)
      .emit(
        "message",
        sendMessage("admin", `${user.userName} joined the room`)
      );

    callback();

    io.to(user.userRoom).emit("roomData", {
      room: user.userRoom,
      users: usersInARoom(user.userRoom),
    });
  });

  socket.on("sendMessage", (message) => {
    const user = getUser(socket.id);

    io.to(user.userRoom).emit("message", sendMessage(user.userName, message));
  });
  socket.on("sendLocation", ({ latitude, longitude }) => {
    const user = getUser(socket.id);

    io.to(user.userRoom).emit(
      "message",
      sendLocation(user.userName, latitude, longitude)
    );
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.userRoom).emit(
        "message",
        sendMessage("admin", `${user.userName} left the chat.`)
      );
      io.to(user.userRoom).emit("roomData", {
        room: user.userRoom,
        users: usersInARoom(user.userRoom),
      });
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
