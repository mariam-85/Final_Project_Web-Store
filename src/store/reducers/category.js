const defaultState = {};

const LOAD_CATEGORY = 'LOAD_CATEGORY';

export const loadCategoryById = payload => ({ type: LOAD_CATEGORY, payload });

export const categoryReducer = ( state = defaultState, action ) => {
    if( action.type === LOAD_CATEGORY ) {
        return action.payload
    } else {
        return state
    }
}