import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import MoviesGrid from "./MoviesGrid";
import {Box} from "@material-ui/core";
import {getMoviesByGenre, useStyle} from "../constants";
import CircularProgress from "@material-ui/core/CircularProgress";


function MovieGenre(props) {

    const [movies, setMovies] = useState({'movies': []});
    const classes = useStyle();

    useEffect(() => {
        getMoviesByGenre((result) => {
            setMovies(result);
        });
    }, []);
    console.log(movies);

    return (
        (movies.movies[0]) ?
            <Box>
                {

                    (movies.movies).map((movie) =>
                        <Box style={{marginTop: "10px", marginLeft: "10px"}}>
                            <Typography className={classes.typo}>
                                {movie.gen}
                            </Typography>
                            <MoviesGrid movies={movie.details}/>
                        </Box>
                    )
                }
            </Box> : <Box style={{marginLeft: "25%"}}>
                <Typography className={classes.typo}>
                    Loading ........
                </Typography>
                <CircularProgress/>
                <CircularProgress color={'secondary'}/>
            </Box>

    );
}

export default MovieGenre;