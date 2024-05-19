const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const PORT = 3000;
server.listen(PORT);
console.log(`Listening on port ${PORT}...`);

let readyPlayerCount = 0;

io.on("connection", (socket) => {
  console.log("A user has connected as...", socket.id);
  socket.on("ready", () => {
    console.log("Player ready", socket.id);
    readyPlayerCount++;
    if (readyPlayerCount === 2) {
      io.emit("startGame", socket.id);
    }
  });
});
