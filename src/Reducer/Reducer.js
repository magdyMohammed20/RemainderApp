
import {addRemainder} from '../actionTypes'

const remainder = (state=[] , action) => {
  let remainders = []

  if(action.type === addRemainder){
    remainders = [...state, {id: Math.random(),text: action.text,date: action.date}]
    return remainders
  }
}

export default remainder