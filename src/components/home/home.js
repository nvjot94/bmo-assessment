import React from 'react';
import RestaurantList from '../restaurant/restaurantList';
import { connect } from 'react-redux'; 
import Search from '../input/Search';
import Filter from '../input/Filter';

import './home.css';
const Home = ({ data }) => {
	return (
		<div>
			<div id='heading'>
			<div className='name-div'>
					<svg className='h-tape' viewBox='0 0 442 28'>
						<g id='p-tape' transform='translate(-1.359 185.409)'>
							<path
								style={{ fill:'red' }}
								d='M5-164.2L24-177c0,0,17.5-2.8,20.3-3c2.7-0.2,104.7,2.8,109.7,2.8s17.9-0.5,19.9-0.3c2.1,0.3,32.1-1.7,32.1-1.7s34.2,2.9,42.6,2.4c8.4-0.4,52.3,1.2,52.3,1.2s75.3,1.3,82.2,1.4c6.9,0,29.8,0.7,31.4,0.4c1.5-0.4,19.5,4.6,22.5,4.6s4,0.1,0,1.1c-4,0.9-15,0.9-18,0.9s-25.4,2-26.7,3s-6.3,0-10.8,0c-4.5,0-65.5-1-70.5-1s-5,1-19,1s-82.1-0.7-86-0.4c-4,0.4-24.5,1.3-30.2,0.8c-5.8-0.4-7.8-1.4-13.8-1.4s-28.2,2.5-34.6,2.3s-46.3,0.3-59.4,0s-37.5-2.1-44.7-0.7C16-162.2,5-164.2,5-164.2z'
							/>
						</g>
					</svg>
					<h1>Open Table</h1>
				</div>
				
				<div className='code'>
					<h3>Find your table for any occasion</h3>
					<Search />
					{data?.length?<Filter />:''}
				</div>
				<RestaurantList />
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	data: state.restaurants.restaurants
});


export default connect(mapStateToProps)(Home);
