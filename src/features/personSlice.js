import { createSlice } from "@reduxjs/toolkit";
import { getRandomPerson } from "../services/personService";

export const initialState = {
    loading:false,
    person : {},
    error:""

}

 const personSlice = createSlice(
    {
        name:"person",
        initialState:initialState,
        reducers:{},
        extraReducers:(builder)=>{

           builder.addCase(getRandomPerson.pending, (state, action)=>{

               state.loading = true
               state.error =""
           });

           builder.addCase(getRandomPerson.fulfilled, (state, action)=>{
               
               state.loading = false;
               state.person = action.payload
               state.error = ""
           });

           builder.addCase(getRandomPerson.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error
           });
        }
    }
);

export default personSlice;