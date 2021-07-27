import React, { useEffect } from 'react'
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { removeService, fetchServices, removeServiceRequest } from '../actions/actionCreators';
import { Preloader, TryAgain } from '../utils/shared/Components';


function ServiceList(props) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = id => {
    //dispatch(removeService(id));
    dispatch(removeServiceRequest(id));
  }

  if (loading) {
    return <Preloader />     
  }

  if (error) {
    return <TryAgain error={ error}/>
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <Link to={`/services/${o.id}`}>
            <button><span role='img'>✍</span> </button>
          </Link>

          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList
