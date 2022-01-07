import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { baseApi } from "./api";
import PersonModel  from "../models/person";



const axiousConfig = {
    headers:{
        "Content-Type":"application/json"}
}


export const getRandomPerson = createAsyncThunk("getRandomPerson",async ()=>{

    const response = await axios.get(baseApi);
    var data =  response.data['results'][0];
    return new PersonModel((data.name.first + data.name.last),data.email,
    data.location.country+"/"+data.location.city,data.picture.large,data.phone);
});