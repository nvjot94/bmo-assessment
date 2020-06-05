import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getData,setLoading } from '../../redux/action/RestaurantsActions';
import './search.css';
import PropTypes from 'prop-types';
const Search = ({ getData,setLoading }) => {
	const [ text, setText ] = useState('');
	const [ showError,setShowError  ] = useState(false);

	const onChange = (event) => {
		setText(event.target.value);
	};
	const onClick = (event) => {
		const url = `https://opentable.herokuapp.com/api/restaurants?city=${text}`;
		event.preventDefault();
		if(text.length !== 0){ 
			setLoading();
			getData(url);
		} 
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
			<label>
			<input 
				data-testid="search-test-input"
				className={showError? 'search-input err-class':'search-input'}
				type='text'
				name='name'
				placeholder='Enter the city name'
				onChange={onChange}
				value={text}
			/>
			</label>
			<button className='search-button'  onClick={onClick} >Find Food</button>
		</form>
		
		</>
	);
};

Search.propTypes = {
	getData: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired
};
export default connect(null, { getData,setLoading })(Search);
