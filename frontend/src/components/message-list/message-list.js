import { useState, useEffect } from "react";
import { Message } from "./message";

export const MessageList = () => {
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([
        { value: "Тестовое сообщение", author: "User" },
        { value: "the message has been sent", author: "Bot" },
    ]);

    const handleSendMessage = () => {
        if (value) {
            setMessages((state) => [...state, { value, author: "User" }]);
            setValue("");
        }
    };

    useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

        if (lastMessage?.author === "User") {
            timerId = setTimeout(() => {
            setMessages((state) => [
                ...state,
                { value: "the message has been sent", author: "Bot" },
            ]);
            }, 1500);
        }

        return () => clearInterval(timerId);
    }, [messages]);

    return (
        <>
            <div>
                {messages.map((message, id) => (
                    <Message key={message.value} message={message} />
                ))}
            </div>

            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Введите сообщение..."
            />

            <button onClick={handleSendMessage}>send</button>
        </>
    );
};