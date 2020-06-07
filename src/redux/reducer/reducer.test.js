import { GET_DATA, FILTER_DATA, ERROR, SET_LOADING } from '../action/Types';
import reducer, { initialState } from './RestaurantsReducer';

describe('Reducer tests', () => {
	it('Should return default state', () => {
		const newState = reducer(initialState, {});
		expect(newState).toEqual({
			restaurants: null,
			filtered: null,
			error: null,
			isFetching: false
		});
	});

	it('Should return new state if receiving type', () => {
		const data = [
			{
				id: 86578,
				name: "Turtle Jack's Muskoka Grill \u0026 Lounge - Brampton",
				address: '20 Cottrelle Blvd.',
				city: 'Brampton',
				state: 'ON',
				area: 'Toronto / SW Ontario',
				postal_code: 'L6S 0E1',
				country: 'CA',
				phone: '9055950519',
				lat: 43.759493,
				lng: -79.715267,
				price: 2,
				reserve_url: 'http://www.opentable.com/single.aspx?rid=86578',
				mobile_reserve_url:
					'http://mobile.opentable.com/opentable/?restId=86578',
				image_url: 'https://www.opentable.com/img/restimages/86578.jpg'
			}
		];
		const newState = reducer(initialState, {
			type: GET_DATA,
			payload: data
		});
		expect(newState).toEqual({
			...initialState,
			restaurants: [
				{
					id: 86578,
					name:
						"Turtle Jack's Muskoka Grill \u0026 Lounge - Brampton",
					address: '20 Cottrelle Blvd.',
					city: 'Brampton',
					state: 'ON',
					area: 'Toronto / SW Ontario',
					postal_code: 'L6S 0E1',
					country: 'CA',
					phone: '9055950519',
					lat: 43.759493,
					lng: -79.715267,
					price: 2,
					reserve_url:
						'http://www.opentable.com/single.aspx?rid=86578',
					mobile_reserve_url:
						'http://mobile.opentable.com/opentable/?restId=86578',
					image_url:
						'https://www.opentable.com/img/restimages/86578.jpg'
				}
			]
		});
	});
	it('Should return filtered restaurants array if receiving filter-type', () => {
		const initialState = {
			restaurants: [
				{
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
					reserve_url:
						'http://www.opentable.com/single.aspx?rid=116275',
					mobile_reserve_url:
						'http://mobile.opentable.com/opentable/?restId=116275',
					image_url:
						'https://www.opentable.com/img/restimages/116275.jpg'
				},
				{
					id: 144763,
					name: 'Trio Ristorante',
					address: '35 Main St N',
					city: 'Brampton',
					state: 'ON',
					area: 'Toronto / SW Ontario',
					postal_code: 'L6X 1M8',
					country: 'CA',
					phone: '9058665535',
					lat: 43.686925,
					lng: -79.761778,
					price: 3,
					reserve_url:
						'http://www.opentable.com/single.aspx?rid=144763',
					mobile_reserve_url:
						'http://mobile.opentable.com/opentable/?restId=144763',
					image_url:
						'https://www.opentable.com/img/restimages/144763.jpg'
				},
				{
					id: 94186,
					name: 'Bucatini',
					address: '170 Bovaird Drive West',
					city: 'Brampton',
					state: 'ON',
					area: 'Toronto / SW Ontario',
					postal_code: 'L7A 1A1',
					country: 'CA',
					phone: '9055551212',
					lat: 43.703529,
					lng: -79.789455,
					price: 3,
					reserve_url:
						'http://www.opentable.com/single.aspx?rid=94186',
					mobile_reserve_url:
						'http://mobile.opentable.com/opentable/?restId=94186',
					image_url:
						'https://www.opentable.com/img/restimages/94186.jpg'
				},
				{
					id: 141112,
					name: 'Vesuvio Ristorante',
					address: '91 George St. South',
					city: 'Brampton',
					state: 'ON',
					area: 'Toronto / SW Ontario',
					postal_code: 'L6Y 1P4',
					country: 'CA',
					phone: '9054590511x',
					lat: 43.684136,
					lng: -79.759555,
					price: 2,
					reserve_url:
						'http://www.opentable.com/single.aspx?rid=141112',
					mobile_reserve_url:
						'http://mobile.opentable.com/opentable/?restId=141112',
					image_url:
						'https://www.opentable.com/img/restimages/141112.jpg'
				},
				{
					id: 23479,
					name: "Jake's Boathouse",
					address: '59 First Gulf Blvd.',
					city: 'Brampton',
					state: 'ON',
					area: 'Toronto / SW Ontario',
					postal_code: 'L6W 4P9',
					country: 'CA',
					phone: '9054519695',
					lat: 43.67854,
					lng: -79.714536,
					price: 2,
					reserve_url:
						'http://www.opentable.com/single.aspx?rid=23479',
					mobile_reserve_url:
						'http://mobile.opentable.com/opentable/?restId=23479',
					image_url:
						'https://www.opentable.com/img/restimages/23479.jpg'
				},
				{
					id: 86578,
					name:
						"Turtle Jack's Muskoka Grill \u0026 Lounge - Brampton",
					address: '20 Cottrelle Blvd.',
					city: 'Brampton',
					state: 'ON',
					area: 'Toronto / SW Ontario',
					postal_code: 'L6S 0E1',
					country: 'CA',
					phone: '9055950519',
					lat: 43.759493,
					lng: -79.715267,
					price: 2,
					reserve_url:
						'http://www.opentable.com/single.aspx?rid=86578',
					mobile_reserve_url:
						'http://mobile.opentable.com/opentable/?restId=86578',
					image_url:
						'https://www.opentable.com/img/restimages/86578.jpg'
				}
			],
			filtered: [],
			isFetching: false
		};
		const newState = reducer(initialState, {
			type: FILTER_DATA,
			payload: 'turtle jack'
		});
		expect(newState.filtered[0].id).toEqual(86578);
	});
});
