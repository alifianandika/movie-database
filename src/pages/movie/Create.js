import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Hero from "../../components/Hero/Hero";

// function CreateMovie({movies, setMovies}) {

function CreateMovie() {
  return (
    <>
      {/* <h2>Create Movie</h2> */}
      
      <Hero />
      {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
      {/* tidak digunakan lagi */}


      <AddMovieForm />
    </>
  );
}

export default CreateMovie;
