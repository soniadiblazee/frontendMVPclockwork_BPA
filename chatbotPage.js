// import React \/
import React,{useState} from React;

function chatbotPage() {
    const [message,setMessage] = useState('')
    const [chatHistory,setChatHistory] = useState('')

    const sendMessage = () => {
        setChatHistory([...chatHistory, {user: message,bot: 'Hello! How can I help?'}]);
        setMessage('');
    };

    return (
        <div>
            <h1>Chatbot</h1>
            <div>
                {chatHistory.map((chat,index) => (
                    <div key={index}>
                        <p><strong>You:</strong> {chat.user}</p>
                        <p><strong>You:</strong> {chat.bot}</p>

