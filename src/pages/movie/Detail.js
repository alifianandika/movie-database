import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINT from "../../utils/constants/endpoints";

function Detail(){
    const params = useParams();
    //mengambil data state movies dengan rekomendasi yang banyak = aarray kosong
    // const [movies, setMovies] = useState([]);
    // const API_KEY = process.env.REACT_APP_API_KEY;

    //dispatch
    const dispatch = useDispatch();

    //melakukan pekerjaan samping dengan menfetch data ke DOM 
    /**
     * useEffect => fuction
     */
    useEffect(() => {
       getRecomendationMovies();
    }, [params.id]);


    async function getRecomendationMovies(){
        // const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(ENDPOINT.RECOMENDANTIONS(params));
        // console.log(response.data.results);


        // setMovies(response.data.results);
        dispatch(updateMovies(response.data.results));

    }

    return(

       

         // memberikan breakdown sekecil mungkin pada komponen pada detail movie
        // <h2><DetailMovie /></h2>
        <div>
            <DetailMovie />
            <Movies  />
            {/* movies={movies} */}
        </div>
    )
}

export default Detail;