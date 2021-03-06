import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Api} from './api/';
import {user_worker, user_employer} from './ducks/userType';
import { registerPageChange } from './ducks/register';
import {user_data} from './ducks/userData';
import Home from './Components/home';
import WorkerRegister from './Components/workerRegister';
import EmployerRegister from './Components/employerRegister';
import EmployerProfile from './Components/employerProfile';
import {Route, Switch} from 'react-router-dom';


const mapStateToProps = state => {
  const { worker, employer} = state.userType;
  const { email, logo, name, picture, password, skills, location} = state.register;
  const Loggeduser = state.userData;

  return {
    worker,
    employer,
    email,
    logo,
    name,
    picture,
    password,
    skills,
    location,
    Loggeduser
  }
}
const mapDispatchToProps = dispatch => ({
  handleUserWorker: () => dispatch(user_worker()),
  handleUserEmployer: () => dispatch(user_employer()),
  handleChange: (name, value) => dispatch(registerPageChange(name, value)),
  handleUserData: res => dispatch(user_data(res))
});

class App extends Component {
  constructor (props){
    super(props);
    this.user = new Api(this.props.handleUserData)
  }
  render() {
    const {
      handleUserWorker,
      handleUserEmployer,
      email,
      logo,
      name,
      picture,
      password,
      skills,
      location,
      handleChange,
      Loggeduser
    } = this.props

    let View;
    if(!Loggeduser){
      View = (<Switch>
        <Route exact path="/" component={()=> (<Home
          handleUserWorker={handleUserWorker}
          handleUserEmployer={handleUserEmployer}
        />)}/>
        <Route path="/worker" render={()=> (<WorkerRegister
            name = {name}
            skills = {skills}
            picture = {picture}
            location = {location}
            email = {email}
            password = {password}
            handleChange = {handleChange}
         />)}/>
         <Route path="/employer" render={()=> (<EmployerRegister
           name = {name}
           logo = {logo}
           email ={email}
           password ={password}
           handleChange = {handleChange}
           onClick ={() => this.user.registerEmployer({name, logo, email, password})}
         />)}/>
       </Switch>)
    }

    else {

      View = (
      <Switch>
          <Route path ='/' render = {() => (<EmployerProfile User = {Loggeduser}/>)}/>
      </Switch>
      )
    }

    return (
        <div>
          {View}
        </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
