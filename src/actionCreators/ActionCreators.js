import {addRemainder,removeRemainder} from '../actionTypes'

export const add_Remainder = (text,date)=>{
  const action = {
    type: addRemainder,
    text,
    date
  }
  
  return action
}

export const remove_Remainder = (id)=>{
  const action = {
    type: removeRemainder,
    id
  }
  
  return action
}