 const toggleButton = document.getElementById('toggleButton');
const status = document.getElementById('status');
let socket;

toggleButton.addEventListener('click', () => {
  if (!socket || socket.readyState === WebSocket.CLOSED) {
    socket = new WebSocket('ws://localhost:3000');

    socket.onopen = () => {
      status.textContent = 'Conectado';
      toggleButton.textContent = 'Desconectar';
      toggleButton.style.backgroundColor = '#dc3545';
    };

    socket.onclose = () => {
      status.textContent = 'Desconectado';
      toggleButton.textContent = 'Conectar';
      toggleButton.style.backgroundColor = '#007BFF';
    };
  } else {
    socket.close();
  }
});
