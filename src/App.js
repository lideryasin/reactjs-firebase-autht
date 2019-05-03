import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      email: null
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        this.setState({email : user.email})
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {

    const email = this.state.email

    return (
      <div className="App">
        {this.state.user ? (
          <Home email={email} />
        ) :
          (
            <Login />
          )}
      </div>
    );
  }
}

export default App;
