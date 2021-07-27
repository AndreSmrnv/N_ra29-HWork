import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, fetchService } from '../actions/actionCreators';
import { Link } from "react-router-dom";
import { Preloader, TryAgain } from '../utils/shared/Components';



function ServiceAdd({ match }) {
  const {item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();
  useEffect(() => {
		dispatch(fetchService(match.params.id))		
	  }, [match.params.id]);

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {    
    dispatch(addService());
    evt.preventDefault();
  }
  if (loading) {
    return <Preloader />     
  }

  if (error) {
    return <TryAgain error={ error}/>
  }
  console.log(item)
  return (
    <form onSubmit={handleSubmit} >
      <input name='name' onChange={handleChange} value={item.name} placeholder='Название' />
      <input name='price' onChange={handleChange} value={item.price} placeholder='Услуга'/>
      <input name='content' onChange={handleChange} value={item.content} placeholder='Описание' />
      <Link to={`/services`}><button type='submit' onClick={handleSubmit } disabled={loading}>Save</button></Link>
      
      <Link to={`/services`}>
        <button type='reset'  disabled={loading} >Cancel</button>
      </Link>
      

    </form>
  );
}

export default ServiceAdd;
