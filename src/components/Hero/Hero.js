/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledCol from "./Hero.styled";
import axios from "axios";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(",  ");
  // console.log(genres);
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
 console.log(trailer);

  // async function fetchMovie() {
  //   const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
  //   // Melakukan Fetch data dari API omdb.
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   // Update state movie dengan data movie (hasil fetch)
  //   setMovie(data);
  // }

  /**s
   * Menjalankan useEffect.
   * Parameter kedua digunakan untuk custom lifecycle update.
   * Jika state di dalam array berubah, maka jalankan useEffect lagi (lifecycle update).
   * Jika state di dalam array kosong, maka jalankan sekali (lifecycle mount).
   */
  // useEffect(fetchMovie, []);

  // Tampilkan state movie.
  // console.log(movie);



  //mendapatkan 1 data dari trending movies
  async function getTrendingMovies(){
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    // console.log(response.data.results[0]);

    //ubah array untuk melihat hasil di pakcage hero + bisa generate angka 0 - 20 (Math.floor(Math.random * 20)
    return response.data.results[19];
  }

  // 1
  // useEffect(getTrendingMovies, []);

  useEffect(getDetailMovies, []);

  //membuat fungsi untuk mendapatkan detail movie
  async function getDetailMovies(){
    const trendingMovie = await getTrendingMovies();
    // console.log(trendingMovie);
    const id = trendingMovie.id;

    //fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    console.log(response.data);


    //response movie
    setMovie(response.data);
  }

  return (
    // <StyledCol>
       <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          {/* dari omdb */}
          {/* <h2 className={styles.hero__title}>{movie.Title}</h2> */}
          {/* <p className={styles.hero__description}>{movie.Plot}</p> */}
          {/* <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3> */}


          {/* dari TMDB */}
          <h2 className={styles.hero__title}>{movie.title}</h2>
          <h3 className={styles.hero__genre}>{genres}</h3>
          <p className={styles.hero__description}>{movie.overview}</p>
          {/* <Button size="md" variant="secondary">Watch</Button> */}



          <Button as="a" href={trailer} target="_blank">Watch</Button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            // src={movie.Poster}
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </section>
    </div>

    // </StyledCol>
   
  );
}

export default Hero;
