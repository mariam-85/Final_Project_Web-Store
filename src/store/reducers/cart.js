const defaultstate = [];

const ADD_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT ';
const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const clearCart = () => ({ type: CLEAR_CART });
export const incrementProduct = payload => ({ type: INCREMENT_PRODUCT, payload });
export const decrementProduct = payload => ({ type: DECREMENT_PRODUCT, payload});
export const deleteProduct = payload => ({ type: DELETE_PRODUCT, payload });

const checkProduct = (state,payload) => {
    const ProductInState = state.find( item => item.id === payload.id );
    if(ProductInState) {
        ProductInState.count++
        return [...state]
    } else {
        return [...state , {
            ...payload,
            count: 1
            }
        ]
    }
}

export const cartReducer = ( state = defaultstate, action ) => {
    if( action.type === ADD_TO_CART ) {
        return checkProduct( state, action.payload )

    } else if(action.type === CLEAR_CART) {
        return defaultstate

    } else if( action.type === INCREMENT_PRODUCT ) {
        state.find(el => el.id === action.payload).count++
        return [...state]

    } else if(action.type === DECREMENT_PRODUCT) {
        const target_item = state.find(el => el.id === action.payload);

        target_item.count === 1 
        ? state = state.filter(el => el.id !== action.payload)
        : target_item.count--
        return [...state]

    } else if( action.type === DELETE_PRODUCT ) {
        return  state.filter(el => el.id !== action.payload)
      
    } else {
        return state
    } 
} 