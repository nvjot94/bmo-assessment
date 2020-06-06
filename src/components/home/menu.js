import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './menu.css';
//
const Menu = ({ toggleMode }) => {
	return (
		<nav className='nav-bar'>
			<ul>
				<li>
					<Link exact to='/'>
						<i className='material-icons'>home</i>
					</Link>
				</li>
				<li>
					<Link to='/about'>
						<i className='material-icons'>person</i>
					</Link>
				</li>
				<li>
					<i className='material-icons' onClick={toggleMode}>
						invert_colors
					</i>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
