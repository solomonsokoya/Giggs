import React, {Component} from 'react';
class workerRegister extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = (e) => {
      e.preventDefault()
      this.props.onClick(this.props)
    }
  }

  handleInputChange(e) {
    const { name, value} = e.target;
    this.props.handleChange(name, value);
  }
  render() {
    const {name, skills, picture, location, email, password} = this.props
    return (
      <div className = "loginGrid">
        <div className = "headline">Join Giggs Today</div>
        <form className = "form" >
          <input className="name" type="text" value = {name} onChange = {this.handleInputChange} name="name" placeholder="Name"/>
          <input className="skills" type="text" value = {skills} onChange = {this.handleInputChange} name = "skills" placeholder="Skills"/>
          <input className="picture" type="text" value = {picture} onChange = {this.handleInputChange} name="picture" placeholder="Picture url"/>
          <input className="location" type="text" value = {location} onChange = {this.handleInputChange}  name = "location"  placeholder="Location"/>
          <input className="email" type="email" value = {email} onChange = {this.handleInputChange} name="email" placeholder="Email"/>
          <input className="password" type="password" value = {password} onChange = {this.handleInputChange} name="password" placeholder="Password"/>
          <input className="submit" type="submit" value = "Register" onClick ={this.sumbit}/>
        </form>
      </div>
    );
  }
}

export default workerRegister;
