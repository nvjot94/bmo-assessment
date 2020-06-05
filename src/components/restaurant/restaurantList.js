import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import Restaurant from './restaurant';
import './restaurant.css';
const RestaurantList = ({ data, filtered, isFetching }) => {


	return (
		<div className='project-div'>
			<div>
				{data||filtered?<h2>Total Results : {filtered?filtered.length:data.length}</h2>:''}
			</div>
			<div className='project-container'>
			{filtered ? (
						filtered.map(item => (
							<Restaurant restaurant={item} key={item.id} />
						))
					) : data ? (
						data.map(item => (
							<Restaurant restaurant={item} key={item.id} />
						))
					) : null}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	data: state.restaurants.restaurants,
	filtered: state.restaurants.filtered,
	isFetching: state.restaurants.isFetching
});

RestaurantList.propTypes = {
	data: PropTypes.array.isRequired,
	filtered: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired
};
export default connect(mapStateToProps)(RestaurantList);
