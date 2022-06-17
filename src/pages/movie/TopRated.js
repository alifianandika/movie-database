import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINT from "../../utils/constants/endpoints";

function TopRatedMovie() {
  // const API_KEY = process.env.REACT_APP_API_KEY;

  // //URL API TMDB yang bisa dikombinasikan page atau lainnya
  // // const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  // const URL = ` https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=2`;
 

    //GANTI DENGAN END POINT (BASE_URL)


  //membuat state 
  
  // const [movies, setMovies] = useState([]);

  //buat dispatch
  const dispatch = useDispatch();

  async function getTopRated(){
    const response = await axios(ENDPOINT.TOP_RATEDS);

    //cek API data popular 
    // setMovies(response.data.results);
    dispatch(updateMovies(response.data.results));
  }

  useEffect(() => { getTopRated(); }, []);


  return (
    <>

       {/* memberikan stack hero untuk pemilihan Top Rates */}
       {/* Bagaimana merubah tampilan hero ketika ganti link? */}
      <Hero />
      <Movies  judul="Top Rateds" />
      {/* movies={movies} */}
    </>
  );
}

export default TopRatedMovie;
