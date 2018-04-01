import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Router from './router';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
    );
  }
}

axios.defaults.baseURL = 'http://localhost:5000/';
export default App;
