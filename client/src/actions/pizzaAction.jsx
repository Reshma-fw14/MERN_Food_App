import axios from "axios"
export const getAllPizzas=()=>dispatch=>{
    dispatch({type:"GET_PIZZASS_REQUEST"})

    try{
        const reqpnse=axios.get('/api/pizzas/getpizzas')
        console.log(response)
        dispatch({type:"GET_PIZZASS_REQUEST"})
    }catch(error){
        dispatch({type:"GET_PIZZASS_FAILED"})
    }
}