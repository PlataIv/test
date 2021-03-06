import axios from 'axios'
export const getUser = () => async (dispatch) =>{
    try {
        const data ={data:{id:"mira_ese_hardcode_papa"}}
        if(data.data){
            dispatch({ type: "FETCH_CURRENT", payload: data.data.id});
        }else{
            dispatch({ type: "DELETE_CURRENT"});
        }
        
    } catch (error) {
        dispatch({ type: "DELETE_CURRENT"});
    }
}

export const deleteUser =  () => async (dispatch) =>{
    try {
    
            dispatch({ type: "DELETE_CURRENT"});
        
        
    } catch (error) {
        console.log(error)
    }
}

export const setUser = ()=> async (dispatch,data)=>{
    try {
        dispatch({ type: "SET_CURRENT", payload: data});
    } catch (error) {
        console.log(error)
    }

}
