import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div className = "background">
        <link href="https://fonts.googleapis.com/css?family=Gugi|Lato:300" rel="stylesheet"/>
        <div className = "grid">
          <p className = "title"> Giggs</p>
          <div className = "statement"> Commited To Connecting Employers & Future Employees</div>
          <Link className ="bt1" to='/worker' onClick = {this.props.handleUserWorker}>Worker</Link>
          <Link className = "bt2" to= '/employer' onClick = {this.props.handleUserEmployer}>Employer</Link>
        </div>
      </div>
    );
  }
}

export default Home;
