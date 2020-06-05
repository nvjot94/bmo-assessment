import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import Restaurant from './Restaurant';
import store from '../../Store';

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders same data is in props', () => {
	const data = {
		id: 116275,
		name: 'Aria Bistro \u0026 Lounge',
		address: '485 Main Street North',
		city: 'Brampton',
		state: 'ON',
		area: 'Toronto / SW Ontario',
		postal_code: 'L6S 1N8',
		country: 'CA',
		phone: '9054512600x',
		lat: 43.69822,
		lng: -79.77679,
		price: 3,
		reserve_url: 'http://www.opentable.com/single.aspx?rid=116275',
		mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=116275',
		image_url: 'https://www.opentable.com/img/restimages/116275.jpg'
	};
	act(() => {
		render(
			<Provider store={store}>
				<Restaurant restaurant={data} />
			</Provider>,
			container
		);
	});
	expect(container.querySelector('[data-testid="restaurant-name"]').textContent).toEqual(data.name);

	
});