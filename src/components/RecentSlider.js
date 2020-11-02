import React from 'react';
import ThumbCard from "./ThumbCard";
import Carousel from "./Carousel";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(
    {
        root: {
            marginLeft: "3%",
        }
    }
)

function RecentSlider(props) {
    const classes = useStyle();
    const movies = props.movies;
    return (
        <div className={classes.root}><Carousel movies={movies}/></div>

    );
}

export default RecentSlider;