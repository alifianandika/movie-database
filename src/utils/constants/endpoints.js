const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";


const ENDPOINT = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
   
    NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,

    TOP_RATEDS: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=2`,

    TRENDING: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,

    //mengikuti themes yang dimana bisa dipakai ke semua komponen dengan memberikan atribut key

    //option 1 bagaimana yah? gagal 
    // COMPONENT: {
    //     DETAIL(params) {
    //         return  `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;
           
    //         },
    //     RECOMENDANTIONS(params) {
    //         return  `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`;

    //         },
        
           
       
    // },

    // option 2
    DETAIL : id => {
        // this.setState({ id: event.target.value });
        return  `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    },


    RECOMENDANTIONS : params => {
        // this.setState({ id: event.target.value });
        return  `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`;
    },


    //bisa ditambahkan jika ada component yang dibutuhkan






    // RECOMENDANTIONS: `${BASE_URL}/recommendations?api_key=${API_KEY}`,

    // HERO: `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
} ;

export default ENDPOINT;