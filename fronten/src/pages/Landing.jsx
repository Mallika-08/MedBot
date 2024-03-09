import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import '../App.css';
import Slideshow from '../components/Slideshow.jsx';
import Footer from '../components/Footer.jsx';
import Content from '../components/Content.jsx';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Slideshow/>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
