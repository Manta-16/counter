const WebSocket = require("ws");
const PORT = process.env.PORT || 10000;
const server = new WebSocket.Server({ port: PORT });

let count = 0;

server.on("connection", (ws) => {
  ws.send(count);
  ws.on("message", (msg) => {
    if (msg === "increment") {
      count++;
      server.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(count);
        }
      });
    }
  });
});
