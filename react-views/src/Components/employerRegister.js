import React, {Component} from 'react';
class employerRegister extends Component {
  render() {
    console.log(this.props)
    return (
      <div className = "loginGrid">
        <div className = "headline">Join Giggs Today</div>
        <form className = "form" >
          <input type="text" name="name" placeholder="Name"/>
          <input type="text" name="logo" placeholder="logo url"/>
          <input type="email" name="email" placeholder="email"/>
          <input type="password" name="password" placeholder="password"/>
          <input type="submit" value = "register"/>
        </form>
      </div>
    );
  }
}

export default employerRegister;
