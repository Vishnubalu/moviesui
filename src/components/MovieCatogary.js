import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import MoviesGrid from "./MoviesGrid";
import {Box} from "@material-ui/core";
import {getCategoryMovies, useStyle} from "../constants";
import CircularProgress from "@material-ui/core/CircularProgress";


function MovieCatogary(props) {
    const {category, type, num} = props;
    const [movies, setMovies] = useState({'movies': []});
    const classes = useStyle();


    useEffect(() => {
        getCategoryMovies(num, category, type, (result) => {
            setMovies(result);
        });
    }, []);

    return (
        <div>
            {
                (movies.movies[0]) ?
                    <Box style={{marginTop: "10px", marginLeft: "10px"}}>
                        <Typography className={classes.typo} style={{textTransform: "none"}}>
                            {type}
                        </Typography>
                        {
                            (num !== "all") ? <MoviesGrid movies={movies.movies}/> :
                                <Box style={{marginTop: "10px", marginLeft: "0px"}}>

                                    {(movies.movies).map((genres) =>
                                        <Box style={{marginTop: "10px", marginLeft: "0px"}}>
                                            <Typography className={classes.typo} style={{textTransform: "none"}}>
                                                {genres.gen}
                                            </Typography>
                                            <MoviesGrid movies={genres.details}/>
                                        </Box>
                                    )
                                    }
                                </Box>
                        }

                    </Box> : <Box style={{marginTop: "63px", marginLeft: "10px"}}>
                        <CircularProgress size={"5rem"}/>
                        <CircularProgress color={'secondary'} size={"5rem"}/>
                        <Typography>
                            Loading .........
                        </Typography>
                    </Box>
            }
        </div>



)
    ;
}

export default MovieCatogary;