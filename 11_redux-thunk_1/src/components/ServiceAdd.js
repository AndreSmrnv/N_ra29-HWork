import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
import { changeServiceField, addService, fetchService, resetService } from '../actions/actionCreators';


function refreshPage() {
  window.location.reload();
}


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
    // if (error !== null)
    //   return <Redirect to='/services' />;
  }

  const handleReset = () => {		
		resetService(dispatch);		
	}

  if (loading) {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
    )    
  }

  if (error) {
    
    return (
      <>
        <div className="alert alert-danger" role="alert">
          <strong>Произошла ошибка!</strong> {error}
          </div>
          
            <button type='reset' onClick={ refreshPage }  >Попробовать еще раз...</button>
          
      </>  
    )    
  }
  console.log(item);
  console.log(error);
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
