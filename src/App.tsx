import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Route exact path='/' 
      render={() => <Home />}
      />
    </>
  );
}

export default App;
