import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, GET_SERVICE, FILL_SERVICE_FIELD, EDIT_SERVICE, RESET_SERVICE_FIELD } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function getService(id) {
  return {type: GET_SERVICE, payload: {id}};
}

export function fillServiceField(name, price) {
  return {type: FILL_SERVICE_FIELD, payload: {name, price}}
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function resetServiceField() {
  return {type: RESET_SERVICE_FIELD, payload: {}}
}
