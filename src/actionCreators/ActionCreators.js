import {addRemainder} from '../actionTypes'

export const add_Remainder = (text,date)=>{
  const action = {
    type: addRemainder,
    text,
    date
  }
  
  return action
}