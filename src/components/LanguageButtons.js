import React, {useContext, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import {useStyle} from "../constants";
import {Link, useHistory} from "react-router-dom";
import {FilesContext} from "./Contexts";
import Movies from "./movies";

function LanguageButtons(props) {
    const classes = useStyle();
    const movies = useContext(FilesContext)
    const history = useHistory();
    const [clicked, setClicked] = useState(false)


    function onClick(e) {
        movies.setType(e.currentTarget.value);
        movies.setCategory("language");
        movies.setNum("all");
        history.push("/movies");
        console.log("inside", movies)
    }

    console.log(movies);

    return (
        <Box style={{marginTop: "10px", marginLeft: "10px", padding: "10px"}}>
            <Typography className={classes.typo}>
                Movies by Language
            </Typography>
            <Box style={{marginTop: "10px", marginLeft: "10px"}}>
                <button className={classes.button} value={"HINDI"} onClick={onClick}>
                    <img style={{boxShadow: "2px 2px 4px #000000"}}
                         src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_HinIcon/98860eee-5a47-4ede-88c0-76a4c3995de9._UR200,200_SX200_FMwebp_.jpg%201x,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_HinIcon/98860eee-5a47-4ede-88c0-76a4c3995de9._UR200,200_SX400_FMwebp_.jpg%202x"
                    />
                </button>
                <button className={classes.button} value={"ENGLISH"} onClick={onClick}>
                    <img style={{boxShadow: "2px 2px 4px #000000"}}
                         src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_EngIcon/2287b6e2-5cb6-45be-810e-b98399f42b52._UR200,200_SX200_FMwebp_.jpg%201x,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_EngIcon/2287b6e2-5cb6-45be-810e-b98399f42b52._UR200,200_SX400_FMwebp_.jpg%202x"
                    />
                </button>

            </Box>
        </Box>

    );
}

export default LanguageButtons;