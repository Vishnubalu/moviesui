import React, {useState} from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    menu : {
        color:"#006666",
        '&:hover': {
            background: "#006666",
            color: "white"
        }
    },
        button:{
            marginLeft: "100px",
            textTransform:"none",
            fontSize:"19px",
            color:"white"}

});

function TopMenu(props) {
    const classes = useStyles();
    const [anchorMv, setAnchorMv] = React.useState(null);
    const [anchorGr, setAnchorGr] = React.useState(null);

    const handleMovieClick = (event) => {
        setAnchorMv(event.currentTarget);
    };
    const handleMovieClose = (event) => {
        setAnchorMv(null);
        console.log(event.nativeEvent.target.outerText)
    };

    const handleGenreClick = (event) => {
        setAnchorGr(event.currentTarget);
    };
    const handleGenreClose = (event) => {
        setAnchorGr(null);
        console.log(event.nativeEvent.target.outerText)
    };


    return (
        <div>
            <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true"
                    onClick={handleMovieClick}>
                Movies
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorMv}
                keepMounted
                open={Boolean(anchorMv)}
                onClose={handleMovieClose}
            >
                <MenuItem onClick={handleMovieClose} value="profile" className={classes.menu}>Hindi</MenuItem>
                <MenuItem onClick={handleMovieClose} value="account" className={classes.menu}>English</MenuItem>
            </Menu>

            <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true"
                    onClick={handleGenreClick}>
                Genre
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorGr}
                keepMounted
                open={Boolean(anchorGr)}
                onClose={handleGenreClose}
            >
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="action">Action</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Drama">Drama</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Romantic">Romantic</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Thiller">Thriller</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Crime">Crime</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Animation">Animation</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Western">Western</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Fantasy">Fantasy</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Comedy">Comedy</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="History">History</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Music">Music</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Sport">Sport</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Biography">Biography</MenuItem>
                <MenuItem className={classes.menu} onClick={handleGenreClose} value="Advanture">Advanture</MenuItem>

            </Menu>
        </div>
    );
}

export default TopMenu;