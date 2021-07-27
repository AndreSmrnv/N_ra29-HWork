import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, getService, resetServiceField} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList.filteredList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(resetServiceField());
		dispatch(getService(0));
  }
  const handleEdit = id => {
    dispatch(getService(id));
    
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id} className="list">
          <span className="listName" >
            {o.name}
          </span>
          {o.price}
          <button onClick={() => handleEdit(o.id)}>✍ </button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
