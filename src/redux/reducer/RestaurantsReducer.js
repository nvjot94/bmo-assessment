import { GET_DATA, FILTER_DATA, ERROR, SET_LOADING } from '../action/Types';

export const initialState = {
	restaurants: null,
	filtered: null,
	error: null,
	isFetching: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ERROR:
			return {
				...state,
				error: action.payload
			};
		case FILTER_DATA:
			return {
				...state,
				filtered: state.restaurants.filter(restaurant => {
					const { name, address, area } = restaurant;
					console.log(action.payload);
					return name.toLowerCase().includes(action.payload) ||
					address.toLowerCase().includes(action.payload) ||
					area.toLowerCase().includes(action.payload)
						? restaurant
						: false;
				}),
				isFetching: false
			};
		case GET_DATA:
			return {
				...state,
				filtered: null,
				restaurants: [ ...action.payload ],
				isFetching: false
			};
		case SET_LOADING:
			return {
				...state,
				isFetching: true
			};
		default:
			return state;
	}
};

export default reducer;
