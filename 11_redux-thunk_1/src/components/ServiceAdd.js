import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { changeServiceField, addService, fetchService, resetService } from '../actions/actionCreators';
import { Preloader, TryAgain } from '../utils/shared/Components';




function ServiceAdd({ match }) {
  const { item, loading, error } = useSelector(state => state.serviceAdd);
  const {items} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
		fetchService(dispatch, match.params.id);
		
	  }, [match.params.id]);

   
  
  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addService(dispatch, item.name, item.price, item.content, item.id);
    
  }

  const handleReset = () => {		
		resetService(dispatch);		
	}

  if (loading) {
    return <Preloader />     
  }

  if (error) {
    return <TryAgain error={ error}/>
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} placeholder='Название' />
      <input name='price' onChange={handleChange} value={item.price} placeholder='Услуга'/>
      <input name='content' onChange={handleChange} value={item.content} placeholder='Описание' />
      <Link to={`/services`}><button type='submit' disabled={loading}>Save</button></Link>
      
      <Link to={`/services`}>
        <button type='reset'  disabled={loading} >Cancel</button>
      </Link>
      

      {/* {error && <p>Something went wrong try again</p>} */}
    </form>
  );
}

export default ServiceAdd;
