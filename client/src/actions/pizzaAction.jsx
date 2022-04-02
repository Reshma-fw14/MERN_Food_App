import axios from "axios"
export const getAllPizzas=()=>dispatch=>{
    dispatch({type:"GET_PIZZASS_REQUEST"})

    try{
        const response=axios.get('/api/pizzas/getpizzas')
        console.log(response)
        dispatch({type:"GET_PIZZASS_REQUEST", payload:response.data})
    }catch(error){
        dispatch({type:"GET_PIZZASS_FAILED", payload:error})
    }
}