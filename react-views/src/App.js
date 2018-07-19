import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {user_worker, user_employer} from './ducks/user';

const mapStateToProps = state => {
  return {state}
}
const mapDispatchToProps = dispatch =>({
  handleUserWorker: () => dispatch(user_worker()),
  handleUserEmployee: () => dispatch(user_employer())

});

class App extends Component {




  render() {

        // fetch('/employers/1').then( data => data.json()).then( respBody => console.log(respBody));

        console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
