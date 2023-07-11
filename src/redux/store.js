import { configureStore } from '@reduxjs/toolkit'
const initialState = {
    users: [],
    id:0

}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "register":
            return{
                ...state,
                users:[...state.users,action.payload]
            }   
        
        
        
        default:
            return state
    }
}
export default configureStore(reducer)

