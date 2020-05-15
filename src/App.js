import React from 'react';

import './App.css';
import Main from './components/Main';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Router from './components/Router'


function App() {
  return (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>

  );
}

export default App;
