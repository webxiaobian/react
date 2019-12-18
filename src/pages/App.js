import React from 'react';
import { connect } from 'dva';
import logo from '../logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    
    console.log(window,'window');
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default connect(({global}) => ({global}))(App);