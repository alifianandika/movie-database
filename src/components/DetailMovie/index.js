import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINT from "../../utils/constants/endpoints";
// import styled from "styled-components";
import Button from "../ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";



// const StyleDetailMovie = styled.div`

  //bisa gunakan ini yah, kita clean code dengan membentuk file baru
  /* // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }
  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }
  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    .poster {
      flex-basis: 30%;
    }
    .info {
      flex-basis: 60%;
    }
  }
  // Large Screen
  @media screen and (min-width: 992px) {
  } */

// `;

function DetailMovie(){
     /**
     * Todo :
     * - Ambil ID dari parameter URL
     * - Fetch detail movie by id
     */
    

      const params = useParams();
    //   //membuat state pada data
      const [movie, setMovie] = useState("");
      const genres = movie && movie.genres.map((genre) => genre.name).join(",  ");
      //mendapatkan video youtube dengan keys
      const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
      
    
      //membuat fetch data
    useEffect(() => {
        getDetailMovie();
        //fecth ini akan terus berjalan sesuai id yang kita pilih di bagian movies atau secara garis besar ialah terus jalan untuk merefresh page sesuai pilihan lalu hero akan berubah
    },[params.id]);

    async function getDetailMovie(){
        const API_KEY = process.env.REACT_APP_API_KEY;
        // penentuan params dan key api webnya biar statis
        const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;

         //GANTI DENGAN END POINT (BASE_URL)

        const response = await axios(URL);
        // console.log(response.data);

        //Simpan data state
        setMovie(response.data);
    }

        // console.log(movie);
      // return <h4>Detail Movie : {params.id}</h4>
      return (
          <StyledDetailMovie>
              <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
              </div>
              <div className="info">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                <Button as="a" href={trailer}>Watch Trailer</Button>

                {/* 26:05 */}
                
              </div>
          </StyledDetailMovie>

      )

   
    
   
   
    
}

export default DetailMovie;