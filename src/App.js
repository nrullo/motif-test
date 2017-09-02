import React, { Component } from 'react';
import rp from 'request-promise';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleOnClick=this.handleOnClick.bind(this);
  }

  handleOnClick(){
    rp({
      method: 'GET',
      uri: 'https://jsonplaceholder.typicode.com/posts/1'
    })
    .then(response=>{
      console.log('response:', response);
    })
    .catch(e=>{
      console.error('error:', e);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleOnClick}>Make HTTP request</button>
      </div>
    );
  }
}

export default App;
