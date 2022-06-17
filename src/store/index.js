//mebuat store import configureStore

import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

/**
 * buatstore
 * menyimpan berbagai slice reducers
 */

const store = configureStore({
    reducer:{
        movies: moviesReducer,
        

    },
});


export default store;