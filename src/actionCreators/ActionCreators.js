import {addRemainder} from '../actionTypes'

export const add_Remainder = (text,date)=>{
  const action = {
    type: addRemainder,
    text,
    date
  }
  
  console.log(action)
  return action
}