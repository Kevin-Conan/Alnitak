import "./styles.css";
import React, {  Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import About from './components/About';
import Rule from "./components/Rule";
import Gamestart from './components/Gamestart';
import Charter01 from './components/charter/Charter01';
import Charter02 from './components/charter/Charter02';
import Charter03 from './components/charter/Charter03';
import Charter04 from './components/charter/Charter04';
import Description from './components/Description';


function App(){


  return (


    <>
      <div className="App">
        <Header />
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/rule" element={<Rule />} />
            <Route path="/gamestart" element={<Gamestart />} />
            <Route path="/charter01" element={<Charter01 />} />
            <Route path="/charter02" element={<Charter02 />} />
            <Route path="/charter03" element={<Charter03 />} />
            <Route path="/charter04" element={<Charter04 />} />
            </Routes>  


        <Footer />
      </div>

      </>  
    
    
  );
}

export default App;