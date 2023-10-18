const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Cliente conectado.');

  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
    // Puedes agregar aquí lógica para manejar los mensajes recibidos.
  });

  ws.on('close', () => {
    console.log('Cliente desconectado.');
  });
});

server.listen(3000, () => {
  console.log('Servidor WebSocket en ejecución en el puerto 3000.');
});
