import React, {useContext, useState} from 'react';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";
import {getMovieLink, getMoviesByGenre} from "../constants";
import {DetailsContext} from "./Contexts";

const useStyle = makeStyles(
    {
        root: {
            minHeight: "100vh",
            justifyContent: "center",
            alignContent: "center",
            padding: "10px",
            maxWidth: "200vh"

        },
        details:
            {
                marginLeft: "25%",
                marginRight: "25%"
            },
        typo: {
            color: "white",
            padding: "5spx"
        }
    }
)

function MovieDetails(props) {
    const {details} = useContext(DetailsContext);
    const classes = useStyle()
    const [clicked, setClicked] = useState(false)
    const [videoId, setVideoid] = useState('')

    function onClick() {
        getMovieLink(details.imdbId, (result) => {
            setVideoid(result.id);

        });
        setClicked(true)
    }


    function onClose() {
        setClicked(false)
    }

    console.log(videoId.id)
    return (
        <Box className={classes.root} style={{backgroundColor: "#006666"}}>
            {(clicked) ? <Box style={{marginLeft: "30%", marginRight: "30%", marginTop: "10%"}}>
                    <YouTube id={videoId} videoId={videoId}/>
                    <Button variant="contained" color="primary" style={{marginLeft: "40%", marginTop: "15px"}}
                            onClick={onClose}>
                        close
                    </Button>
                </Box> :
                <Box className={classes.details} style={{backgroundColor: "#006666", padding: "20px"}}>

                    <Box style={{marginRight: "50%", marginLeft: "30%", padding: "20px"}}>
                        <img src={details.posterPath}/>
                    </Box>

                    <Box style={{marginLeft: "10%"}}>
                        <Typography className={classes.typo} style={{fontSize: "25px", color: "white"}}>
                            TITLE : {details.title}
                        </Typography>
                        <Typography className={classes.typo} style={{fontSize: "15px", color: "#D6DDEC"}}>
                            TAG LINE : {details.tagline}
                        </Typography>
                        <Typography className={classes.typo}>
                            RELEASED IN : {details.releaseDate}
                        </Typography>
                        <Typography className={classes.typo} style={{fontSize: "18px", color: "gray"}}>
                            IMDB Rating : {details.imdbRating}/5
                        </Typography>
                        <Typography className={classes.typo} style={{fontSize: "15px", color: "black"}}>
                            SUMMARY : {details.summary}
                        </Typography>
                        <Typography className={classes.typo}>
                            <a style={{color: "#4981d7"}} href={details.wikiLink}>SEE ON WIKIPEDIA</a>
                        </Typography>
                        <Typography className={classes.typo}>
                            <a style={{color: "#4981d7"}} href={details.imdbLink}> SEE ON IMDB</a>
                        </Typography>
                    </Box>
                    <Box style={{padding: "10px"}}>
                        <Button variant="contained" color="primary" style={{marginLeft: "20%"}} onClick={onClick}>
                            WATCH NOW
                        </Button>
                        <Button variant="contained" color="primary" style={{marginLeft: "20%"}}>
                            FAVOURITE
                        </Button>
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default MovieDetails;