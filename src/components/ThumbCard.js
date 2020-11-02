import React, {useContext, useState} from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ReactCardFlip from 'react-card-flip';
import {Link, useHistory} from "react-router-dom";
import {DetailsContext} from "./Contexts";

const useStyle = makeStyles({
    root: {
        maxWidth: 140,
    },
    media:
        {
            width: 135,
            height: 200,
        },

    button:
        {
            width: 135,
            height: 220,
            border: "none",
            borderRadius: "3px",
            padding: "0px"
        },
    info: {
        maxWidth: 200,
        height: 220
    },
});

function ThumbCard(props) {
    const [load, setLoad] = useState(false)
    const history = useHistory();
    const details = useContext(DetailsContext)
    const {title, tagline, posterPath, imdbRating, releaseDate, imdbId, summary} = props.info;
    const classes = useStyle();

    function myFunc(e) {
        details.setDetails(props.info);
        history.push('/details')
    }

    function Mouseenter() {
        setLoad(true)
    }

    function MouseLeave() {
        setLoad(false)
    }


    return (

        <Box flex={1} onMouseEnter={Mouseenter}
             onMouseLeave={MouseLeave}>

            <button className={classes.button} value={imdbId} onClick={myFunc}>
                <ReactCardFlip isFlipped={load} flipDirection="vertical">
                    <Card key={imdbId} className={classes.root}
                          style={{background: "linear-gradient(to right bottom, white , black)"}} raised={true}
                          value={"hehe"}>
                        <CardActionArea>
                            <CardMedia className={classes.media}
                                       image={posterPath}>
                            </CardMedia>
                            <Rating
                                size="small"
                                name="read-only"
                                value={imdbRating}
                                readOnly
                                className={classes.rating}
                                max={5}/>
                            <Typography style={{color: "white", fontSize: "10px", float: "right"}}>
                                {releaseDate}
                            </Typography>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.info}>
                        <CardActionArea>
                            <CardContent>
                                <Typography style={{color:"red", padding:"0px", fontSize:"15px"}}>
                                   Tittle:{title}
                                </Typography>
                                <Typography style={{color:"black", padding:"0px", fontSize:"12px"}}>
                                    Rating:{imdbRating}
                                </Typography>
                                <Typography style={{color:"green", padding:"0px", fontSize:"10px"}}>
                                    {tagline}
                                </Typography>
                                <Typography style={{color:"blue", padding:"0px", fontSize:"8px"}}>
                                    {summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </ReactCardFlip>
            </button>
        </Box>
    );
}

export default ThumbCard;