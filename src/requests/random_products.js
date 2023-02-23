import { loadRandomProducts } from "../store/reducers/random_products"

export const random_load_products = ( dispatch ) => {
    fetch('http://localhost:3333/products/all')
    .then( resp => resp.json())
    .then( json => dispatch(loadRandomProducts(json)))
}