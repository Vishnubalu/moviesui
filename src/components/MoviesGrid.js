import React from 'react';
import Grid from "@material-ui/core/Grid";
import ThumbCard from "./ThumbCard";

function MoviesGrid(props) {
    const {movies} = props;
    return (
        <Grid container justify="left" spacing={2} className={{flexGrow: 1}}>
            {movies.map((movie) =>
                <Grid key={movie.imdbId} item>
                    <ThumbCard info={movie}/>
                </Grid>
            )}
        </Grid>
    )
}

export default MoviesGrid;