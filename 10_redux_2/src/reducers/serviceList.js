import nanoid from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, GET_SERVICE, EDIT_SERVICE, FILTER_SERVICE} from '../actions/actionTypes'

const initialState = {
  list: [
    { id: nanoid(), name: 'Замена стекла', price: 21000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 },
  ],
  selectedItem: '',
  filteredList: []
};

export default function serviceListReducer(state = initialState, action) {
  
  const payload = action.payload;
  switch (action.type) {
    case ADD_SERVICE:     
      return {
        ...state,
        list: [...state.list, { id: nanoid(), name: payload.name, price: Number(payload.price) }]
      };
    case REMOVE_SERVICE:     
      return {
        ...state,
        list: state.list.filter(service => service.id !== payload.id)
      };
    case GET_SERVICE:      
      return {
        ...state,
        selectedItem: payload.id
      };
    case EDIT_SERVICE:
      const indx = state.list.findIndex(el => el.id === payload.id);
      state.list[indx] = { id: payload.id, name: payload.name, price: Number(payload.price) }
        return {
          ...state,
          list: [...state.list]
      };
    case FILTER_SERVICE:     
        return {
          ...state,
          filteredList: payload.str.length>0 ? state.list.filter(service => service.name.includes( payload.str.toLowerCase())) : [...state.list]
      };
      
    default:
      return state;
  }
}
