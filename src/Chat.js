import React from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';

function Chat() {

    let { roomId } = useParams();

    return (
        <div className="chat">
            <h2>You are in the room {roomId} </h2>
            <div className="chat_header">
                <div className="chat_header">

                </div>
            </div>
        </div>
    )
}

export default Chat
