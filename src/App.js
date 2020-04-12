import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {add_Remainder,remove_Remainder,clear_Remainder} from  './actionCreators/ActionCreators'
import {connect} from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state={
    text: '',
    date: new Date(),
  }

  renderAllRemainders = () =>{
    const {remainders} = this.props

    return remainders.map(task=>{
      return(
        <li key={task.id} className='d-flex align-items-center justify-content-between alert alert-success text-left'>
          <div>
          <p className='m-0'>{task.text}</p>
          <p className='m-0'>{moment(new Date(task.date)).fromNow()}</p>
          </div>
          <button className='btn btn-danger rounded-pill' style={{width: '40px',height: '40px'}} onClick={()=>this.props.remove_Remainder(task.id)}>X</button>
        </li>
      )
    })
  }
  render(){
    
    return (
      <div className="App">
        <div className='w-50 mx-auto text-center d-flex flex-column'>
          <h2>Remainder Tasks</h2>
          <input 
            type='text' 
            value={this.state.text}
            className='form-control mt-3' 
            placeholder='What Should You Do ...'
            onChange={(e)=> this.setState({text: e.target.value})}
          />

          <DatePicker
            value={this.state.date}
            className='form-control my-3'
            selected={this.state.date}
            onChange={date=>{
              this.setState({
                date
              });
            }}
            showTimeSelect
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            timeFormat="HH:mm"
          />

          <ul className='list-unstyled'>
            {
              this.renderAllRemainders()
            }
          </ul>
          <button 
            className='btn btn-primary' 
            onClick={()=>{

              if(this.state.text !== ''){
                this.props.add_Remainder(this.state.text , this.state.date)
              }else{
                alert('Please Enter Task...')
              }
              this.setState({
                text: '',
                date: new Date()
              })

            } 
              
            }>
            Add Task
          </button>
          <button className='btn btn-danger mt-2' onClick={this.props.clear_Remainder}>Clear</button>
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

function mapStateToProps(state){
  return{
    remainders : state
  }
}
// You Can Pass {add_Remainder} Instead Of Using 'mapDispatchToProps'
export default connect(mapStateToProps,{add_Remainder,remove_Remainder,clear_Remainder})(App);
