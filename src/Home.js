import React, { Component } from 'react';
import fire from './config/Fire';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }

    render() {
      console.log(this.props.email)
        return (
            <div>
                <h1>`Welcome to {this.props.email}` </h1>
                <button onClick={this.logout}>Logout</button>

            </div>
        );

    }

}

export default Home;

