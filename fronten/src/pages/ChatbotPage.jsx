import axios from "axios";
import { useState } from "react";
import './ChatbotPage.css';

function ChatbotPage(){
const[question, setQuestion] = useState("");
const[answer, setAnswer] = useState("");


   async function generateAnswer(){
       const response = await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDU8sWVqY-wXRpxelDbY-MGZ_bWzqLhIsc",
            method:"post",
            data:{
                    contents:[
                        {parts:[{text: question}]},
                    ],
                },
        });
        setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    }

    return(
        <>
            <div className="chat-cont">
                <h2>MedBot.AI</h2>
                <textarea cols="70" rows="10" value={question} onChange={(e)=>setQuestion(e.target.value)} ></textarea>
                <button onClick={generateAnswer}>Generate Answer</button>
                <pre>{answer}</pre>
            </div>
        </>
    );
}
export default ChatbotPage;