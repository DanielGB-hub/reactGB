import React from 'react'
import './Message.css';

function Message(props) {
    return (
        <div>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Message;