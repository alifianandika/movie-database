// Import Halaman Home
import Home from "./pages/Home";
// Import Routes dan Route dari React Router.
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/Detail";
import { useState } from "react";
import data from "./utils/constants/data";

function App() {

  // const [movies, setMovies] = useState(data);
  //dah disimpan di slice
  /**
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
      {/*
       * Setiap halaman dibungkus olah Layout.
       * Layout digunakan oleh setiap halaman yang dirender.
       */}

      {/* Bungkus App dengan Theme Styled Component */}
      <ThemeProvider theme={theme}>
        {/* Menggunakan Global Style Component */}
        <GlobalStyle />
        <Layout>
          {/*
           * Membuat Routing.
           * Bungkus Routing menggunakan Routes.
           * Buat Routing menggunakan Route.
           */}
          <Routes>
            {/* <Route path="/" element={<Home movies={movies}/>}></Route> */}
           {/* ditutup sebab ada redux  */}

            <Route path="/" element={<Home/>}></Route>
            {/* <Route path="/movie/create" element={<CreateMovie  movies={movies} setMovies={setMovies}/>} /> */}


            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
