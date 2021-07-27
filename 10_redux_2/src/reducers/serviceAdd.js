import {CHANGE_SERVICE_FIELD, FILL_SERVICE_FIELD, RESET_SERVICE_FIELD} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  search: ''
};


export default function serviceAddReducer(state = initialState, action ) {
  
    const payload = action.payload;
   
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:      
      return { ...state, [payload.name]: payload.value };
    case FILL_SERVICE_FIELD:      
      return { ...state, name: payload.name, price: payload.price };
    case RESET_SERVICE_FIELD:      
      return { ...initialState };
    default:
      return state;
  }
}
