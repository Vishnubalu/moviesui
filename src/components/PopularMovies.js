import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import MoviesGrid from "./MoviesGrid";
import {Box} from "@material-ui/core";
import {POPULAR_MOVIES_URL, useStyle} from "../constants";

function PopularMovies(props) {
    const [popular, setPopular] = useState({'movies': []});
    const classes = useStyle();

    function getPopularMovies() {
        fetch(POPULAR_MOVIES_URL, {
            method: 'GET'
        }).then((response) => {
            response.json().then((jsonResponse) => {
                setPopular(jsonResponse)
            })
        })
    }

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (
        <Box style={{marginTop: "10px", marginLeft: "10px"}}>
            <Typography className={classes.typo}>
                Popular
            </Typography>
            <MoviesGrid movies={popular.movies}/>
        </Box>
    );
}

export default PopularMovies;