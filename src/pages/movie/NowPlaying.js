import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie() {
   //membuat atribut key API
   const API_KEY = process.env.REACT_APP_API_KEY;
   const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
   
   //membuat state 
   const [movies, setMovies] = useState([]);
   

   async function getNowPlaying(){
      const response  = await axios(URL);

      //cek API data popular 
      setMovies(response.data.results);
   }

   //cek atribut movies
  //  console.log(movies);


  //fetch data dari axios + atribut lainnya (async)
   useEffect(()=> { getNowPlaying(); }, []);

  return (
    <>

      {/* memberikan stack hero untuk pemilihan NowPlayingMovie */}
      <Hero />
      <Movies movies={movies} judul="Now Playing" />
     
    </>
  );
}

export default NowPlayingMovie;
