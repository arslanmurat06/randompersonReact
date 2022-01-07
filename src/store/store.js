import { configureStore } from "@reduxjs/toolkit";
import personSlice from "../features/personSlice";

const store = configureStore({
    reducer:{
        personReducer:personSlice.reducer,
    }
});

export default store;