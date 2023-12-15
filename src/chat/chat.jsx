import React from 'react';
import './chat.css';
import { Sock } from './chatws';

async function Send(){
    Sock.sendMessage();
}
// Sock.connectToWS();
export function Chat() {
  return (
    <main className='container-fluid bg-secondary text-center'>
          <div id="chat-box">
        <ul id="messages" className="list-group list-group-light"></ul>
        <div id="input-box">
          <input type="text" id="new-msg" placeholder="Type your message"/>
          <button id="send-button" className="btn btn-primary" onClick={() => Send()}>Send</button>
          <div id="chat-text"></div>
        </div>
      </div>
    </main>
  );
}