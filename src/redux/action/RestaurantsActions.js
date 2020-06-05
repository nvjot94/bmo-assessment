import { GET_DATA, FILTER_DATA, SET_LOADING, ERROR } from './Types';

// Get request to add data into state by area name
export const getData = (url) => async (dispatch) => {
	 
	try {
		
		const data = await fetch(url);
		const result = await data.json();

		dispatch({
			type: GET_DATA,
			payload: result.restaurants
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: error.response
		});
	}
};
// action to filter data
export const filterData = (text) => async (dispatch) => {
	
	try {
	
		dispatch({
			type: FILTER_DATA,
			payload: text.toLowerCase()
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: error.response.data
		});
	}
};

export const setLoading = () => async (dispatch) =>{
	dispatch({
		type: SET_LOADING
	  }) 
  };