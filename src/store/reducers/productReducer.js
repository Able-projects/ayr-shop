
import {ADD_PRODUCT,DELETE_PRODUCT,ADD_BASKET, EDIT_PRODUCT,GET_BASKET,DELETE_ITEM_BASKET, GET_COMMENTS,ADD_COMMENT, DELETE_COMMENT, PAGE_PRODUCTS, GET_PRODUCTS, GET_CATEGORIES, GET_SIZES, GET_COLORS, EDIT_COMMENT} from '../actions/types'


const initialState = {
   products: [],
   colors: [],
   categories: [],
   sizes: [],
   comments: [],
   basket: []
}

export default function (state=initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_BASKET:
            return {
                ...state,
                basket: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: action.payload
                }
        case DELETE_ITEM_BASKET:
            return {
                ...state,
                basket: action.payload
                }
        case ADD_BASKET:
            return {
                ...state,
                basket: action.payload
                }
        case EDIT_PRODUCT:
            return {
                ...state,
                products: action.payload
                }
        case PAGE_PRODUCTS:
            return {
                ...state,
                products: action.payload
                }
        case EDIT_COMMENT:
            return {
                ...state,
                comments: action.payload
                }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_SIZES:
            return {
                 ...state,
                sizes: action.payload
            }   
        case GET_COLORS:
            return {
                ...state,
                colors: action.payload
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case ADD_COMMENT:
                return {
                    ...state,
                    comments: [...state.comments, action.payload]
                }
        default:
            return state;
    }
}






