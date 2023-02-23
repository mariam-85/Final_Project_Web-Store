const defaultState = [];

const LOAD_RANDOM_PRODUCTS = 'LOAD_RANDOM_PRODUCTS';

export const loadRandomProducts = (payload) => ({
	type: LOAD_RANDOM_PRODUCTS,
	payload: payload.sort(() => 0.5 - Math.random()).slice(0, 3)});

export const randomProductsReducer = (state = defaultState, action) => {
	if (action.type === LOAD_RANDOM_PRODUCTS) {
		return action.payload;		
	} else {
		return state;
	}
};