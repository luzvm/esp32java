 const chat = document.getElementById('chat');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = (event) => {
  const message = event.data;
  chat.innerHTML += `<p>${message}</p>`;
  chat.scrollTop = chat.scrollHeight;
};

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    socket.send(message);
    messageInput.value = '';
  }
});
