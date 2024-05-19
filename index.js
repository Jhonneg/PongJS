import sockets from "./socket.js";
import apiServer from "./api.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(apiServer);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT;
httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);
sockets(io);
