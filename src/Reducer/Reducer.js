
import {addRemainder,removeRemainder, clearRemainders} from '../actionTypes'

const remainder = (state=[] , action) => {
  let remainders = []
  if(action.type === addRemainder){
    remainders = [...state, {id: Math.random(),text: action.text,date: action.date}]    
    return remainders
  }else if(action.type === removeRemainder){
    remainders = state.filter(remainder =>{
      return remainder.id !== action.id
    })

    return remainders
  }else if(action.type === clearRemainders){
    remainders = []
    return remainders
  }
  
  return state
}

export default remainder