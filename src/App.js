import './App.css';
import React from 'react';
import Pokemon from './components/Pokemon';
import Logo from './components/Logo';
import Footer from './components/Footer';


const App = () => {

  return (
    <>
      <Logo/>
      <Pokemon/>
      <Footer/>
    </>
  );
};

export default App;
