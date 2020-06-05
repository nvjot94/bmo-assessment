import React from 'react';
import { connect } from 'react-redux'; 
import Restaurant from './restaurant';
import './restaurant.css';

const RestaurantList = ({ data, filtered }) => {


	return (
		<div className='project-div'>
			<div>
				{data||filtered?<h2>Total Results : {filtered?filtered.length:data.length}</h2>:''}
			</div>
			hello
			<div className='project-container' data-testid='restaurant-component'>
			{filtered ? (
						filtered.map(item => (
							<Restaurant restaurant={item} key={item.id}  />
						))
					) : data ? (
						data.map(item => (
							<Restaurant restaurant={item} key={item.id}  />
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


export default connect(mapStateToProps)(RestaurantList);
