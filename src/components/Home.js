import React from 'react';
import {Box} from "@material-ui/core";
import PopularMovies from "./PopularMovies";
import RecentMovies from "./RecentMovies";
import LanguageButtons from "./LanguageButtons";
import MovieGenre from "./MovieGenre";
import MovieCatogary from "./MovieCatogary";


function Home() {
    return (
        <Box flex={1} style={{backgroundColor: "#006666", minHeight: "100vh", maxWidth:"198vh", paddingRight:"10px"}}>
            <RecentMovies/>
            <PopularMovies/>
            <MovieCatogary category={"language"} type={"Hindi"} num={10}/>
            <MovieCatogary category={"language"} type={"English"} num={10}/>
            <LanguageButtons/>
            <MovieGenre/>
        </Box>
    );
}

export default Home;
