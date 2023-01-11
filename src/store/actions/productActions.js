
import {ADD_PRODUCT,PAGE_PRODUCTS,ADD_BASKET,GET_BASKET,DELETE_ITEM_BASKET,EDIT_COMMENT, GET_COMMENTS,DELETE_COMMENT,ADD_COMMENT, EDIT_PRODUCT, GET_PRODUCTS, GET_COLORS, GET_CATEGORIES, GET_SIZES, DELETE_PRODUCT} from './types'
import axios from 'axios'

export const getProducts = () => dispatch =>{
   axios.get('products')
    .then(res => {
        console.log("Response: ", res, res.data)
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
};
export const getMyBasket = () => dispatch =>{
    axios.get('baskets')
     .then(res => {
         console.log("Response: ", res, res.data)
         dispatch({
             type: GET_BASKET,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

export const getProductsPage = (page) => dispatch =>{
    axios.get('pagination/'+ page)
     .then(res => {
         console.log("Response: ", res, res.data)
         dispatch({
             type: GET_PRODUCTS,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };


export const getSizes = () => dispatch =>{
    axios.get('sizes')
     .then(res => {
         dispatch({
             type: GET_SIZES,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 
 export const getColors = () => dispatch =>{
    axios.get('colors')
     .then(res => {
         dispatch({
             type: GET_COLORS,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 
 
export const getCategories = () => dispatch =>{
    axios.get('categories')
     .then(res => {
         dispatch({
             type: GET_CATEGORIES,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

 export const getComments = () => dispatch =>{
    axios.get('comments')
     .then(res => {
         dispatch({
             type: GET_COMMENTS,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

 export const deleteProduct = (id) => dispatch => {
    axios.delete('products/'+id,{
        headers: {
        "Content-Type": undefined
    }})
    .then(res => {
        dispatch({
            type: DELETE_PRODUCT,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
  };

  export const deleteComment = (id) => dispatch => {
    axios.delete('comments/'+id,{
        headers: {
        "Content-Type": undefined
    }})
    .then(res => {
        dispatch({
            type: DELETE_COMMENT,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
  };


 export const saveProduct = data => dispatch =>{
    const fm = new FormData()
    Object.keys(data).map(key => {
        if(key !== 'colors' && key !== 'sizes') fm.append([key], data[key])
         else {
            data[key].map(item => fm.append([key], item))
        }
    })
    axios.post('products', fm, {
        headers: {
        "Content-Type": undefined
    }})
     .then(res => {
         dispatch({
             type: ADD_PRODUCT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

 export const saveComment = data => dispatch =>{
    const fm = new FormData()
    Object.keys(data).map(key => {
        fm.append([key], data[key])
    })
    axios.post('comments', fm, {
        headers: {
        "Content-Type": undefined
    }})
     .then(res => {
         dispatch({
             type: ADD_COMMENT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };
 export const addToBasket = product => dispatch =>{
    const fm = new FormData()
    fm.append("product", product)
    axios.post('baskets',fm, {
        headers: {
        "Content-Type": undefined
    }})
     .then(res => {
         dispatch({
             type: ADD_BASKET,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

 export const deleteCard = (id) => dispatch => {
    axios.delete('baskets/'+id,{
        headers: {
        "Content-Type": undefined
    }})
    .then(res => {
        dispatch({
            type: DELETE_ITEM_BASKET,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
  };

 export const editComment = data => dispatch =>{
    const fm = new FormData()
    Object.keys(data).map(key => {
        fm.append([key], data[key])
    })
    axios.put('comments', fm, {
        headers: {
        "Content-Type": undefined
    }})
     .then(res => {
         dispatch({
             type: EDIT_COMMENT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

 export const editProduct = (data) => dispatch =>{
    const fm = new FormData()
    Object.keys(data).map(key => {
        if(key !== 'colors' && key !== 'sizes') fm.append([key], data[key])
         else {
            data[key].map(item => fm.append([key], item))
        }
    })
    axios.put('products', fm, {
        headers: {
        "Content-Type": undefined
    }})
     .then(res => {
         dispatch({
             type: EDIT_PRODUCT,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };

 export const filterProducts = (query) => dispatch =>{
    axios.get(`/products/filter/${query}`)
     .then(res => {
         console.log("Response: ", res, res.data)
         dispatch({
             type: GET_PRODUCTS,
             payload: res.data
         })
     })
     .catch(err => console.log(err))
 };