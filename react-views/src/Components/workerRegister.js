import React, {Component} from 'react';
class workerRegister extends Component {
  render() {
    return (
      <div className = "loginGrid">
        <div className = "headline">Join Giggs Today</div>
        <form className = "form" >
          <input className="name" type="text" name="name" placeholder="Name"/>
          <input className="skills" type="text" name = "skills" placeholder="Skills"/>
          <input className="picture" type="text" name="picture" placeholder="Picture url"/>
          <input className="location" type="text" name = "location"  placeholder="Location"/>
          <input className="email" type="email" name="email" placeholder="Email"/>
          <input className="password" type="password" name="password" placeholder="Password"/>
          <input className="submit" type="submit" value = "Register"/>
        </form>
      </div>
    );
  }
}

export default workerRegister;
