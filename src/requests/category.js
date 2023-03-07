import { loadCategoryById } from "../store/reducers/category.js"; 

export const getCategory = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/info/${id}`)
        .then( resp => resp.json())
        .then( json => dispatch(loadCategoryById(json)))
    }
}