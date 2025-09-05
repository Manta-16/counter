const counterEl = document.getElementById("counter");
const button = document.getElementById("increment");

// WebSocketサーバーのURL（外部にホストしたもの）
const socket = new WebSocket("wss://your-server.onrender.com");

socket.onmessage = (event) => {
  counterEl.textContent = event.data;
};

button.addEventListener("click", () => {
  socket.send("increment");
});
s
