import React, {Component} from 'react';
import {connect} from 'react-redux';
import {user_worker, user_employer} from './ducks/userType';
import Home from './Components/home';
import WorkerRegister from './Components/workerRegister';
import EmployerRegister from './Components/employerRegister';

const mapStateToProps = state => {
  const {worker, employer, name, email, password, skills, picture, location, logo} = state;
  return {worker, employer}
}
const mapDispatchToProps = dispatch => ({
  handleUserWorker: () => dispatch(user_worker()),
  handleUserEmployer: () => dispatch(user_employer())
});

class App extends Component {
  render() {
    const {handleUserWorker, handleUserEmployer} = this.props
    let View;

    if (!this.props.worker && !this.props.employer) {
      View = <Home handleUserWorker={handleUserWorker} handleUserEmployer={handleUserEmployer}/>
    } else if (this.props.worker) {
      View = <WorkerRegister/>
    }
    else if(this.props.employer){
      View = <EmployerRegister/>
    }
    return (<div>
      {View}
    </div>);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
