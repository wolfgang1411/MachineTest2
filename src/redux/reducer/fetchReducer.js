import {GET_USER} from '../action/actionType';

const initalState = {
    user:[], 
    total_pages:'',
    per_page:'',
    isLoading:true,
    error:[]
}

export const userReducer = (state=initalState,action) => {
    const { type , payload } = action
    switch(type){
        case GET_USER:
            return{
                ...state,
                user:[...payload.data , ...state.user],
                per_page:payload.per_page,
                total_pages:payload.total_pages,
                isLoading:false
            }
        default:
            return state
    }
}

