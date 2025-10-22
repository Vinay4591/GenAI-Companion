import React, {useState} from 'react';

function Chat(){
    const [prompt, setPrompt] = useState("");
    const [chatResponse, setChatResponse] = useState("");
    const askAI = async() => {
        try{
            const response = await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`);
            const data = await response.text();
            console.log("Chat AI response:", data);
            setChatResponse(data);
        }
        catch(err){
            console.error("Error getting chat response:", err);
        }
    }
    return(
        <div>
            <h2>Chat with AI</h2>
            <input
            type = "text"
            value = {prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Ask the question...'
            />

        <button onClick={askAI}>Ask AI</button>
        <div className='output'>
            <p>{chatResponse}</p>
        </div>
        </div>
    );
}

export default Chat;