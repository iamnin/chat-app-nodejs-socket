import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { saveMessage } from "./services/saveMessage.js";
import { getMessage } from "./services/getMessage.js";
import authRoute from "./routes/authRoute.js";

const CHAT_BOT = "ChatBot";

dotenv.config();

const app = express();

const server = http.createServer(app);

let chatRoom = "";
let allUsers = [];

app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

app.use(authRoute);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("join_room", async (data) => {
    const { username, room } = data;
    socket.join(room);

    let __createdtime__ = Date.now();

    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    });

    socket.emit("receive_message", {
      message: `Welcome ${username}`,
      username: CHAT_BOT,
      __createdtime__,
    });

    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    const chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);

    try {
      const last20Message = await getMessage(room);

      socket.emit("last_20_message", last20Message);
    } catch (error) {}
  });

  socket.on("send_message", async (data) => {
    const { message, username, room, __createdtime__ } = data;
    io.in(room).emit("receive_message", data); // Send to all users in room, including sender
    try {
      await saveMessage(message, username, room);
    } catch (error) {}
  });
});

server.listen(4000, () => {
  console.log("Server is Running");
});
