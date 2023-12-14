// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
//   appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  console.log(event);
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
//   document.querySelector('#name-controls').disabled = true;
//   document.querySelector('#chat-controls').disabled = true;
};
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
}
// Send a message over the webSocket
function sendMessage() {

  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value.trim();
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    username = getCookie("username");
    socket.send(`{"name":"${username}", "msg":"${msg}"}`);
    msgEl.value = '';
    console.log(msg);
  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
    // const chatText = document.querySelector('#chat-text');

    const messageInput = document.getElementById('message-input');
    const messagesList = document.getElementById('messages');
    const chatText = msg;//messageInput.value.trim();
  
    if (chatText !== '') {
      const messageItem = document.createElement('li');
      messageItem.textContent = from + ": " + chatText;
      messageItem.classList.add("list-group-item");
      messagesList.appendChild(messageItem);
      messagesList.scrollTop = messagesList.scrollHeight;
    }
//   chatText.innerHTML =
//     `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
//     chatText.innerHTML;
}

// Send message on enter keystroke
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Disable chat if no name provided
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
