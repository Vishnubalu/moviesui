import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {RECENT_MOVIES_URL, useStyle} from "../constants";
import RecentSlider from "./RecentSlider";

function RecentMovies(props) {
    const [recent, setRecent] = useState({'movies': []});
    const classes = useStyle();

    function getPopularMovies() {
        fetch(RECENT_MOVIES_URL, {
            method: 'GET'
        }).then((response) => {
            response.json().then((jsonResponse) => {
                setRecent(jsonResponse)
            })
        })
    }

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (
        <div style={{padding: "0px"}}>
            <Typography className={classes.typo}>
                Recent
            </Typography>
            <RecentSlider movies={recent.movies}/>
        </div>
    );
}

export default RecentMovies;