import React from 'react';
import './App.css';
import Navbar from './componets/nav /Navbar';
import Header from './componets/header/Header';
import Reason from './componets/reason/Reason';
import Portfolio from './componets/portfolio/Portfolio';
import Tarif from './componets/tarif/Tarif';
import Bidform from './componets/bidform/Bidform';
import Footer from './componets/footer/Footer';

function App() {
  return (
    <div>
      <header>
      <div id="navbar">
        <Navbar />
      </div>
        {/* <div id="header">
        <Header />
        </div>

        <div id="reason">
        <Reason />
        </div>
        <div id="portfolio">
        <Portfolio />
        </div>
        <div id="tarif">
        <Tarif />
        </div>
        <div id="bidform">
        <Bidform />
        </div>
        <div id="footer">
        <Footer /> 
        </div> */}
        


        
      </header>
    </div>
  );
}

export default App;
