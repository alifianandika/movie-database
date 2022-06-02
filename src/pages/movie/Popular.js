import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopularMovie() {
  //simpan API_KEY dan URL ke variabel
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  

  //membuat state
  //pakai array kosong untuk bisa diproses pada file movies lalu dilooping ama map
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // useEffect(async() => {
    //fetch data dari axios
    // const response = await axios(URL);
    // console.log(response.data.results);

    //CTRL + D buat ubah bersamaan
    getPopularMovie();

    //simpan data ke state movie
    // setMovies(response.data.results);

    
  }, []);

  async function getPopularMovie(){
     
    const response = await axios(URL);
  
    setMovies(response.data.results);
  }


  console.log(movies);
  
  return (
    <>
      
      {/* memberikan stack hero untuk pemilihan Popular */}
      <Hero />
      <Movies movies={movies} judul="Popular" />
    </>
  );
}

export default PopularMovie;
