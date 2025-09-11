import React from 'react';
import './App.css';
import Navbar from'/Users/macbookpro/Desktop/react7/my-app/src/componets/nav /Navbar'
import Header from './componets/header/Header';
import Reason from './componets/reason/Reason';
import Portfolio from './componets/portfolio/Portfolio';

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Header />
        <Reason />
        <Portfolio />
      </header>
    </div>
  );
}

export default App;
