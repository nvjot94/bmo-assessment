import React, { Fragment } from 'react';

import image  from './image.jpg';
const Restaurant = ({ restaurant }) => {
	let { name,address,area,price} = restaurant;
	return (
		<Fragment>
			<article className='card' data-testid='restaurant'>
				<h5 data-testid='restaurant-name'>{name}</h5>
				<figure>
					<img src={image} alt='project-img' className='card-img' />
				</figure>	
				<p><b>{address}</b></p>
				<p>{area}</p>	
	<p>${price}</p>	
			</article>
			{/* <hr className='hori-line' /> */}
		</Fragment>
	);
};

export default Restaurant;
