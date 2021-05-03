import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container text-center">
      <Navbar/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
