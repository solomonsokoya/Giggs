import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerEmployer} from './api/';
import {user_worker, user_employer} from './ducks/userType';
import { registerPageChange } from './ducks/register';
import Home from './Components/home';
import WorkerRegister from './Components/workerRegister';
import EmployerRegister from './Components/employerRegister';

const mapStateToProps = state => {

  const { worker, employer} = state.userType;
  const { email, logo, name, picture, password, skills, location} = state.register;

  return {
    worker,
    employer,
    email,
    logo,
    name,
    picture,
    password,
    skills,
    location
  }
}
const mapDispatchToProps = dispatch => ({
  handleUserWorker: () => dispatch(user_worker()),
  handleUserEmployer: () => dispatch(user_employer()),
  handleChange: (name, value) => dispatch(registerPageChange(name, value)),
  handleSubmit: (attempt) => registerEmployer(attempt)
});

class App extends Component {
  render() {
    const {
      handleUserWorker,
      handleUserEmployer,
      worker,
      employer,
      email,
      logo,
      name,
      picture,
      password,
      skills,
      location,
      handleChange,
      handleSubmit
    } = this.props
    let View;

    if (!worker && !employer) {
      View = <Home handleUserWorker={handleUserWorker} handleUserEmployer={handleUserEmployer}/>
    } else if (worker) {
      View = <WorkerRegister
          name = {name}
          skills = {skills}
          picture = {picture}
          location = {location}
          email = {email}
          password = {password}

       />
    }
    else if(employer){
      View = <EmployerRegister
        name = {name}
        logo = {logo}
        email ={email}
        password ={password}
        handleChange = {handleChange}
        handleSubmit ={handleSubmit}
      />
    }
    return (<div>
      {View}
    </div>);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
