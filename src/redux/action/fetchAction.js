import { GET_USER , GET_ERROR } from "./actionType";

let i = 2
export const getUser =  () => async dispatch => {

    try{
        const user = await fetch(`https://reqres.in/api/users?page=${i}`).then(res=> res.json())
        dispatch({
            type:GET_USER,
            payload:user
        })
        
        if(i < user.total_pages  || i === 0)  return;
        i--
        console.log(user)
        dispatch(getUser())
    } catch(err){
        dispatch({
            type:GET_ERROR,
            payload:err.message
        })
    }
    
}