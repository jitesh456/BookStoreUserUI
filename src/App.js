import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Routers from './components/Routers'


function App() {
  return (
    <BrowserRouter>
        <Routers/>
    </BrowserRouter>

  );
}

export default App;
