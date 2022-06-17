//import createSlice

import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";


/**
 * buat slice : untuk generate action dan reducer
 * menerima param object : name, initialState, reducers
 */

const moviesSlice = createSlice({
    name: "Movie Slice",
    initialState:{
        movies: data,

    },
    reducers:{
        addMovie(state, action) {
            //add movie to movies

            state.movies.push(action.payload);


        },

        //membuat reducer updateMovies : untuk update movies
        updateMovies(state, action){
            //kita timpa state movies
            state.movies = action.payload;
        }


        // deleteMovie() {},


    },
});


//generation action dan reducers

const moviesReducer = moviesSlice.reducer;
const { addMovie, updateMovies  } = moviesSlice.actions;
//deleteMovie

//export action dan reducer
export default moviesReducer;
export {
    addMovie, updateMovies
};
//deleteMovie

