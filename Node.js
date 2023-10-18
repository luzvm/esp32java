 const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const os = require('os');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  const ip = req.connection.remoteAddress;

  ws.on('message', (message) => {
    // Broadcast the received message to all connected clients.
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`IP(${ip}): ${message}`);
      }
    });
  });
});

server.listen(3000, () => {
  console.log('Servidor WebSocket en ejecución en el puerto 3000.');
});
