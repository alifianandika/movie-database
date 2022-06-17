import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINT from "../../utils/constants/endpoints";


function NowPlayingMovie() {
   //membuat atribut key API
  //  const API_KEY = process.env.REACT_APP_API_KEY;
  //  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`; 
  // // const URL = ENDPOINT.NOW

  //GANTI DENGAN END POINT (BASE_URL)


   //membuat state 
  //  const [movies, setMovies] = useState([]);

   //buat dispacth
   const dispacth = useDispatch();
   

   async function getNowPlaying(){
      // const response  = await axios(ENDPOINT.NOW);
      const response = await axios(ENDPOINT.NOW_PLAYING);

      //cek API data popular 
      // setMovies(response.data.results);
      // updateMovies();
      dispacth(updateMovies(response.data.results));

   }

   //cek atribut movies
  //  console.log(movies);


  //fetch data dari axios + atribut lainnya (async)
   useEffect(()=> { getNowPlaying(); }, []);

  return (
    <>

      {/* memberikan stack hero untuk pemilihan NowPlayingMovie */}
      <Hero />
      <Movies  judul="Now Playing" />
      {/* movies={movies} */}
    </>
  );
}

export default NowPlayingMovie;
