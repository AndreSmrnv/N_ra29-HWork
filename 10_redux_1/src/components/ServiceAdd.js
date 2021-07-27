import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, fillServiceField, editService, resetServiceField, getService } from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const { list, selectedItem } = useSelector(state => state.serviceList);
	
	console.log(selectedItem);
	const dispatch = useDispatch();
	useEffect(() => {
		if (list.length) {
			const itemSel = list.find(el => el.id === selectedItem);
			itemSel && dispatch(fillServiceField(itemSel.name, itemSel.price));
			console.log(itemSel);
		}
		
	  }, [selectedItem]);
	
	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}
	const handleReset = () => {		
		dispatch(resetServiceField());
		dispatch(getService(0));
	}
	const handleSubmit = evt => {
			evt.preventDefault();
		selectedItem ? 
			dispatch(editService(selectedItem, item.name, item.price))
			: dispatch(addService(item.name, item.price));
		
		dispatch(getService(0));
		dispatch(resetServiceField());		
	}

	return (
		<form onSubmit={handleSubmit}>			
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			<button type='reset' onClick={ handleReset}>Cancel</button>
		</form>
	);
}

export default ServiceAdd;
