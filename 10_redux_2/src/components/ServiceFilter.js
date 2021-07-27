import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, resetServiceField, filterService } from '../actions/actionCreators';

function ServiceFilter() {
	const item = useSelector(state => state.serviceAdd);
	const { list } = useSelector(state => state.serviceList);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(filterService(item.search))
		
	  }, [item.search, list]);
	
	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
		
	}
	const handleReset = () => {		
		dispatch(resetServiceField());
		
	}

	const handleSubmit = evt => {
			evt.preventDefault();			
	}

	return (
		<form onSubmit={handleSubmit}>
			
			<input name='search' placeholder='что ищем?' onChange={handleChange} value={item.search} />			
			
			<button type='reset' onClick={ handleReset}>Cancel</button>
		</form>
	);
}

export default ServiceFilter;
