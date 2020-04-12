import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {add_Remainder} from  './actionCreators/ActionCreators'
import {connect} from 'react-redux'

class App extends Component {
  state={
    text: '',
    date: new Date()
  }

  render(){
    return (
      <div className="App">
        <div className='w-75 mx-auto text-center d-flex flex-column'>
          <h2>Remainder Tasks</h2>
          <input 
            type='text' 
            className='form-control mt-3' 
            placeholder='What Should You Do ...'
            onChange={(e)=> this.setState({text: e.target.value})}
          />
          <input 
            type='datetime-local' 
            className='form-control my-3'
            onChange={(e)=> this.setState({date: e.target.value})}  
          />
          <button className='btn btn-primary' onClick={()=> add_Remainder(this.state.text , this.state.date)}>Add Task</button>
          <button className='btn btn-danger mt-2'>Clear</button>
        </div>
      </div>
    );
  }
}


/*
function mapDispatchToProps(dispatch){
  return {
    addRemainder: ()=> dispatch(add_Remainder())
  }
}
*/

// You Can Pass {add_Remainder} Instead Of Using 'mapDispatchToProps'
export default connect(null,{add_Remainder})(App);
