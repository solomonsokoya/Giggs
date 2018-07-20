import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {user_worker, user_employer} from './reducers';

const mapStateToProps = state => {
  console.log(state)
  const {
      worker,
      employer
  } = state;
  return {worker, employer}
}
const mapDispatchToProps = dispatch => ({
  handleUserWorker: () => dispatch(user_worker()),
  handleUserEmployer: () => dispatch(user_employer())
});

class App extends Component {




  render() {

        // fetch('/employers/1').then( data => data.json()).then( respBody => console.log(respBody));

        console.log(this.props)

    return (

      <div className = "background">
        <link href="https://fonts.googleapis.com/css?family=Gugi|Lato:300" rel="stylesheet"/>
        <div className = "grid">
          <p className = "title"> Giggs</p>
          <div className = "statement"> Commited To Connecting Employers & Future Employees</div>
          <button className ="bt1" onClick = {this.props.handleUserWorker}>Worker</button>
          <button className = "bt2" onClick = {this.props.handleUserEmployer}>Employer</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
