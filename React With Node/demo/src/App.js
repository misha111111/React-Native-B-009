import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom'; 

class Login extends Component {
  render() { 
    return (
      <div> 
        Welcome to Login Screen
        <br/>
        <input type='button' value='Login' onClick={() => {
          this.props.history.push('home');
        }}/>
        <input type='button' value='Login With Params' onClick={() => {
          sessionStorage.setItem('age', 30);
          localStorage.setItem('state', 'Delhi');
          this.props.history.push({
            pathname: 'home',
            params: { username: 'Arjun', city: 'Hyderabad'}
          });
        }}/>
      </div> 
    ) 
  }
}
class Home extends Component {
  render() { 
    const { username, city } = this.props.location.params || { username: '', city: ''};
    const age = sessionStorage.getItem('age');
    const state = localStorage.getItem('state');
    return (
      <div> 
        Welcome to Home Screen, {username}, {age}, {city}, {state}
        <br/>
        <input type='button' value="Go Back" onClick={() => this.props.history.goBack()} />
      </div> 
    ) 
  }
}
class ContactUs extends Component {
  render() { return (<div> Welcome to Contact US Screen</div> ) }
}
class UnImplemented extends Component {
  render() { return (<div> Need to Implement</div> ) }
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/contact' component={ContactUs} />
        <Route path='*' component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;
