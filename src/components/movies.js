import React, {useContext} from 'react';
import {Box} from "@material-ui/core";
import MovieCatogary from "./MovieCatogary";
import {FilesContext} from "./Contexts";

function Movies(props) {
    const movies = useContext(FilesContext);
    console.log(movies);

    return (
        <Box flex={1} style={{backgroundColor: "#006666", minHeight: "100vh", maxWidth:"198vh", paddingRight:"10px"}}>
            <MovieCatogary category={movies.category} type={movies.type} num={movies.num}/>
        </Box>

    );
}

export default Movies;