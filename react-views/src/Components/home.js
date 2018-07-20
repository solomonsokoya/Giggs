import React, {Component} from 'react';
class Home extends Component {
  render() {
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

export default Home;
