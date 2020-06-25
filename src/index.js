import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routers from './components/Routers';

ReactDOM.render(
  <Route>
    <Routers/>
  </Route>,
  document.getElementById('root')
);
serviceWorker.unregister();
