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
        <Navbar />
        <Header />
        <Reason />
        {/* <Portfolio />
        <Tarif />
        <Bidform />
        <Footer /> */}
      </header>
    </div>
  );
}

export default App;
