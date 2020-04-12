import {addRemainder,removeRemainder, clearRemainders} from '../actionTypes'
import { bake_cookie, read_cookie} from 'sfcookies'

const remainder = (state=[] , action) => {
  let remainders = []

  state = read_cookie('remainders') // Read Cookies
  
  if(action.type === addRemainder){
    remainders = [...state, {id: Math.random(),text: action.text,date: action.date}]    
    bake_cookie('remainders',remainders) // Save The Tasks In Cookies
    return remainders
  }else if(action.type === removeRemainder){
    remainders = state.filter(remainder =>{
      return remainder.id !== action.id
    })
    bake_cookie('remainders',remainders) // Save The Tasks In Cookies
    return remainders
  }else if(action.type === clearRemainders){
    remainders = []
    bake_cookie('remainders',remainders) // Save The Tasks In Cookies
    return remainders
  }
  
  return state
}

export default remainder