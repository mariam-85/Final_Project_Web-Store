// import { loadProductsByCategory } from "../store/reducers/prod_category.js" 

// export const getProductsByCategory = ( categoryId ) => {
//     return dispatch => {
//         fetch(`http://localhost:3333/categories/${categoryId}`)
//         .then( resp => resp.json())
//         .then( json => {
//             const payload = json.map(el => ({
//                 ...el,
//                 hide_elem: false
//             }))
//             dispatch(loadProductsByCategory(payload))
//         })
//     }
// }

import { loadProductsByCategory } from "../store/reducers/prod_category" 

export const getProductsByCategory = ( categoryId ) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${categoryId}`)
        .then( resp => resp.json())
        .then( json =>  dispatch(loadProductsByCategory(json))) 
    }
}