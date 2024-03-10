
import './index.css';
import './App.css';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import GetHelp from './pages/GetHelp.jsx';
import ProvideHelp from './pages/ProvideHelp.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import User from './pages/User.jsx';
import Upload from './pages/Upload.jsx';
import View from './pages/View.jsx';
import ChatbotPage from './pages/ChatbotPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/User' element={<User/>} />
        <Route path='/GetHelp' element={<GetHelp/>} />
        <Route path='/ProvideHelp' element={<ProvideHelp/>} />
        <Route path='/Upload' element={<Upload/>} />
        <Route path='/View' element={<View/>} />
        <Route path='/ChatbotPage' element={<ChatbotPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
