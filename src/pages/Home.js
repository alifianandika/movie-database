// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
// import { useState } from "react";
// import data from "../utils/constants/data";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
// function Home({movies}) {
//ini ditutup karena sudah ada redux moies

function Home() {
  /**
   * Mengangkat stave movies: lifting state.
   * Dari Component Movies ke Component Home.
   * Agar bisa digunakan oleh Component yang lain.
   */
  // const [movies, setMovies] = useState(data);
  //pindnahkan ke file app.js

  return (
    <>
      <Hero />
      {/* Mengirim props: state movies */}
      {/* <Movies movies={movies} setMovies={setMovies} /> */}
      <Movies   />

      {/* <Movies movies={movies}  /> */}
      {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
    </>
  );
}

export default Home;
