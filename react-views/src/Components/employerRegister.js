import React, {Component} from 'react';
class employerRegister extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const {name, value} = e.target;
    this.props.handleChange(name, value);
  }

  render() {
    const {name, logo, email, password} = this.props

    return (<div className="loginGrid">
      <div className="headline">Join Giggs Today</div>
      <form className="form">
        <input type="text" value={name} name='name' onChange={this.handleInputChange} placeholder="Name"/>
        <input type="text" value={logo} name='logo' onChange={this.handleInputChange} placeholder="logo url"/>
        <input type="email" value={email} name='email' onChange={this.handleInputChange} placeholder="email"/>
        <input type="password" value={password} name='password' onChange={this.handleInputChange} placeholder="password"/>
        <input type="submit" value="register"/>
      </form>
    </div>);
  }
}

export default employerRegister;
