const express = require("express");
const { sequelize } = require("./models");
const { rootRouter } = require("./router/index");
const app = express();
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const Filter = require("bad-words");
var formatTime = require("date-format");
const { createMessage } = require("./utils/message");
app.use(express.json());

// cai static files
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

//dung router
app.use("/api/v1", rootRouter);

const server = http.createServer(app);
const io = socketio(server);

//lang nghe su kien tu client
io.on("connection", (socket) => {
  //gui loi chao cho client
  socket.emit("message", "Tôi có thể giúp gì cho bạn không ?");

  //chat
  socket.on("message", (messageText, callback) => {
    const fillter = new Filter();
    if (fillter.isProfane(messageText)) {
      return callback("message không hợp lệ");
    }
    io.emit("message", createMessage(messageText));
    callback();
  });

  // ngat ket noi clien
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});

// lang nghe su kien ket noi
app.listen(3000, async () => {
  console.log("App listening on http://localhost:3000");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
