import React from 'react';
import Navbar from './components/layout/Navbar'; 
import HomePage from './components/HomePage';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/> 
      <Footer/>
    </div>
  );
}

export default App;