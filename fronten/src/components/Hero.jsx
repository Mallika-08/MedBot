import '../index.css';
import ChatbotImg from '../components/icons/chatbotimg.png';
import ChatBot from '../pages/ChatbotPage.jsx';
import { Link } from 'react-router-dom';
function Hero(){
    return(
        <>
            <div className = "parent">
                <button className='topbtn'>One stop destination for every problem! </button>
                <h1>MedBot.AI</h1>
                <div className="text">
                <p> Find assistance, give care, get suggestions and reminders all at one place<br></br>with the help of AI and medical proffesionals </p>
                <button>Dive in</button>
                </div>
                <div className="left">
                    <div className="blob"></div>
                </div>
                <div className="right">
                    <div className="blob"></div>
                </div>
                <div className="glass">

                </div>
                <div className='chatbot'>
                    <Link to="/ChatbotPage"><img alt="chatbot" src={ChatbotImg}/></Link>
                </div>
            </div>
        </>
    );
}
export default Hero;
