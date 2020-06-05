import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterData,setLoading } from '../../redux/action/RestaurantsActions';
import PropTypes from 'prop-types';
import './search.css';
const Filter = ({ filterData,setLoading }) => {
	const [ text, setText ] = useState('');
	const [ showError,setShowError  ] = useState(false);
	const onFocus = () => setText('');
	const onChange = (event) => {
		setText(event.target.value);
	};
	const onClick = (event) => {
		
		event.preventDefault();
		if(text.length !== 0) filterData(text)
	 	else toggleErrorMessage();
	};

	const toggleErrorMessage=()=>
	{
		setShowError(true);
		setTimeout(()=>setShowError(false),2000);
	};
	return (
		<>
		<form className='search-form'>
	<label for="filter-imp">*</label>
		<input
				className={showError? 'search-input err-class':'search-input'}
				type='text'
				id="filter-imp"
				name='name'
				placeholder='...name, address or area'
				onChange={onChange}
				onFocus={onFocus}
				value={text}
			/>
			

	<button className='filter-button' onClick={onClick} >Filter</button>
		</form>
		
		</>
	);
};

Filter.propTypes = {
	filterData: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired
};
export default connect(null, { filterData,setLoading })(Filter);
