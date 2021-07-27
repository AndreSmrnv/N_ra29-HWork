import {
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  FETCH_SERVICE_SUCCESS
} from '../actions/actionTypes'

const initialState = {
  item: { id: 0, name: '', price: '', content: ''},
  loading: false,
  error: null,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_SERVICE_FAILURE:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case ADD_SERVICE_SUCCESS:
      return { ...initialState };
    case FETCH_SERVICE_SUCCESS:
      const {service} = action.payload;
      return {
          ...state,
        item: { ...state.item, ...service },
          loading: false,
          error: null,
      };
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      const { item } = state;
      return {
        ...state,
        item: {
          ...item,
          [name]: value,
        }
      };
    default:
      return state;
  }
}
