import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"yetkiSlice",
    initialState:{email:"",password:""},

    reducers:{
      createUser:(state,action)=>{
        state.email = action.payload.email
        state.password = action.payload.password
      },
      deleteUser:(state)=>{
        state.email=""
        state.password=""
      }
    }
   

})
export const {createUser,deleteUser}=authSlice.actions;

export default authSlice.reducer;