import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class D1 extends Component {
  render() { return (<div> Welcome to Component D1</div> ) }
}
class D2 extends Component {
  render() { return (<div> Welcome to Component D2</div> ) }
}
class D3 extends Component {
  render() { return (<div> Welcome to Component D3</div> ) }
}
class D4 extends Component {
  render() { return (<div> Welcome to Component D4</div> ) }
}
class D5 extends Component {
  render() { return (<div> Welcome to Component D5</div> ) }
}
class D6 extends Component {
  render() { return (<div> Welcome to Component D6</div> ) }
}
class D7 extends Component {
  render() { return (<div> Welcome to Component D7</div> ) }
}
class D8 extends Component {
  render() { return (<div> Welcome to Component D8</div> ) }
}
class D9 extends Component {
  render() { return (<div> Welcome to Component D9</div> ) }
}
class D10 extends Component {
  render() { return (<div> Welcome to Component D10</div> ) }
}

// 1. Basic Routing
class App2 extends React.Component {
  render(){
    return (
      <div>
        <Route path='/r1' component={D1} />
        <Route path='/r2' component={D2} />
        <Route path='/r2' component={D5} />
        <Route path='/r2' component={D6} />
        <Route path='/r3' component={D3} />
        <Route path='/r4' component={D4} />
      </div>
    );
  }
}

// 2. Default Routing - Useful for creating unimplemented pages
class App3 extends React.Component {
  render(){
    return (
      <div>
        <Route path='/r1' component={D1} />
        <Route path='/r2' component={D2} />
        <Route path='/r2' component={D5} />
        <Route path='/r2' component={D6} />
        <Route path='/r3' component={D3} />
        <Route path='/r4' component={D4} />
        <Route path='*' component={D7} />
      </div>
    );
  }
}

// 3. Nested Routes - Make Parent Route as exact
class App4 extends React.Component {
  render(){
    return (
      <div>
        <Route path='/r1' exact component={D1} />
        <Route path='/r1/r5' component={D8} />
        <Route path='/r1/r6' component={D9} />
        <Route path='/r2' component={D2} />
        <Route path='/r2' component={D5} />
        <Route path='/r2' component={D6} />
        <Route path='/r3' component={D3} />
        <Route path='/r4' component={D4} />
      </div>
    );
  }
}

// 4. Switch 
class App5 extends React.Component {
  render(){
    return (
      <Switch>
        <Route path='/r1' exact component={D1} />
        <Route path='/r1/r5' component={D8} />
        <Route path='/r1/r6' component={D9} />
        <Route path='/r2' component={D2} />
        <Route path='/r2' component={D5} />
        <Route path='/r2' component={D6} />
        <Route path='/r3' component={D3} />
        <Route path='/r4' component={D4} />
        <Route path="*" component={D7} />
      </Switch>
    );
  }
}

export default App5;
