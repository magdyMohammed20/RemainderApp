import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <div className='w-75 mx-auto text-center d-flex flex-column'>
          <h2>Remainder Tasks</h2>
          <input type='text' className='form-control mt-3' placeholder='What Should You Do ...'/>
          <input type='datetime-local' className='form-control my-3'/>
          <button className='btn btn-primary'>Add Task</button>
          <button className='btn btn-danger mt-2'>Clear</button>
        </div>
      </div>
    );
  }
}

export default App;
