import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  REMOVE_SERVICE,
  FETCH_SERVICE_SUCCESS
} from './actionTypes';

export const fetchServicesRequest =() => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const addServiceRequest = (name, price) => ({
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
  },
})

export const addServiceFailure = error => ({
  type: ADD_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const addServiceSuccess = () => ({
  type: ADD_SERVICE_SUCCESS,
});

export const fetchServiceSuccess = service => ({
  type: FETCH_SERVICE_SUCCESS,
  payload: {
    service,
  },
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const removeService = id => ({
  type: REMOVE_SERVICE,
  payload: {
    id,
  },
});

export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    dispatch(fetchServicesSuccess(data));
  } catch (error) {
    dispatch(fetchServicesFailure(error.message));
  }
};

export const addService = () => async (dispatch, getState) => {
  dispatch(addServiceRequest());
  //console.log(getState());
  const {serviceAdd: {item: {name, price, content, id}}} = getState();
  console.log({name, price, content, id});
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, price, content, id}),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }

  dispatch(fetchServices());
};

export const removeServiceRequest = (id) => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(fetchServices());
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
  
};

export const fetchService = (id) => async (dispatch) => {
  dispatch(addServiceRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(fetchServiceSuccess(data));
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }
}

