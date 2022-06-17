import axios from "axios";
import { useEffect  } from "react";
//useState
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINT from "../../utils/constants/endpoints";

function PopularMovie() {
  //simpan API_KEY dan URL ke variabel
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  /**
   * KITA UBAH ATRIBUT DIATAS DENGAN FILE ENDPOINT
   */






  //membuat state
  //pakai array kosong untuk bisa diproses pada file movies lalu dilooping ama map
  // const [movies, setMovies] = useState([]);
  //dah ngk butuh lagi state localnya kita pakai post api tmdb

  // membuat triger atau dispatch
  const dispatch = useDispatch();

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
     
  /**
   * KITA UBAH ATRIBUT DIATAS DENGAN FILE ENDPOINT
   */
    const response = await axios(ENDPOINT.POPULAR);
  
    // setMovies(response.data.results);
    // //data ini ditimpa pada slice action (reducer payload)
    dispatch(updateMovies(response.data.results));
  }


  // console.log(movies);
  
  return (
    <>
      
      {/* memberikan stack hero untuk pemilihan Popular */}
      <Hero />
      {/* movies={movies} sia-sia source kode */}
      <Movies  judul="Popular" />
      {/* movies={movies}  kembalikan ke usestate*/}
    </>
  );
}

export default PopularMovie;
