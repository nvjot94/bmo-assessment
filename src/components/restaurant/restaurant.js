import React, { Fragment } from 'react';
import LazyLoad from 'react-lazy-load';
const ProjectFile = ({ restaurant }) => {
	let { name,address,area,price} = restaurant;
	return (
		<Fragment>
			<article className='card'>
				<h5>{name}</h5>
				<figure>
					<LazyLoad><img src='https://pocket-syndicated-images.s3.amazonaws.com/5e4428b7bfde1.jpg' alt='project-img' className='card-img' /></LazyLoad>
				</figure>			
			</article>
			<hr className='hori-line' />
		</Fragment>
	);
};

export default ProjectFile;
