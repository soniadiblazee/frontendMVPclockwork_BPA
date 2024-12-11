// import React \/
import React,{useState} from React;

// handles sending messages
function chatbotPage() {
    const [message,setMessage] = useState('')
    const [chatHistory,setChatHistory] = useState('')

    const sendMessage = () => {
        setChatHistory([...chatHistory, {user: message,bot: 'Hello! How can I help?'}]);
        setMessage('');
    };

// chat boxes for sending a message, and the AI's message
    return (
        <div>
            <h1>Chatbot</h1>
            <div>
                {chatHistory.map((chat,index) => (
                    <div key={index}>
                        <p><strong>You:</strong> {chat.user}</p>
                        <p><strong>You:</strong> {chat.bot}</p>
                    </div>
                ))}
                </div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
    );
}
export default chatbotPage;
//export default so this code can be used in other filess