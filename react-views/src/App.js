import React, {Component} from 'react';
import {connect} from 'react-redux';
import {user_worker, user_employer} from './reducers';
import Home from './Components/home';
import WorkerRegister from './Components/workerRegister';

const mapStateToProps = state => {
  const {
      worker,
      employer
  } = state;
  return {worker, employer}
}
const mapDispatchToProps = dispatch => ({
  handleUserWorker: () => dispatch(user_worker()),
  handleUserEmployer: () => dispatch(user_employer())
});

class App extends Component {




  render() {

        // fetch('/employers/1').then( data => data.json()).then( respBody => console.log(respBody));
        console.log(this.props.worker)
        const{
          handleUserWorker,
          handleUserEmployer
        } = this.props
        let View;

        if (!this.props.worker && !this.props.employer){
          View = <Home handleUserWorker = {handleUserWorker} handleUserEmployer ={handleUserEmployer} />
        }
        else if(this.props.worker){
          View = <WorkerRegister/>
        }
    return (
      <div>
        {View}
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
