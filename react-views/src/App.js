import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {user_worker, user_employer} from './ducks/user';

const mapStateToProps = state => {
  const {
    user: {
      worker,
      employer
    }
  } = state;
  return {worker, employer}
}
const mapDispatchToProps = dispatch => ({
  handleUserWorker: () => dispatch(user_worker()),
  handleUserEmployee: () => dispatch(user_employer())

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
          <button className ="bt1"><a className="bt1" href="/workers"> Worker</a> </button>
          <button className = "bt2"><a className="bt2" href="/employers"> Employer</a> </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
