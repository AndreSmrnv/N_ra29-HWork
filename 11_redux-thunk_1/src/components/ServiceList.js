import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { removeService, fetchServices, removeServiceRequest } from '../actions/actionCreators';

function ServiceList(props) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch);
  }, [dispatch])

  const handleRemove = id => {
    //dispatch(removeService(id));
    removeServiceRequest(dispatch, id);
  }
  


  if (loading) {
    return (
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>)    
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error</strong> Произошла ошибка
      </div>
    )    
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <Link to={`/services/${o.id}`}>
            <button><span role='img'>✍</span> </button>
          </Link>
          
          <button onClick={() => handleRemove(o.id)}><span role='img'>✕</span></button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList
