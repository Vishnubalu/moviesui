import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.png'
import logo2 from './logo2.png'
import SideMenu from "./sideMenu";
import TopMenu from "./topMenu";
import Typography from "@material-ui/core/Typography";

const styleAppbar = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        maxHeight: "100px",
        maxWidth: "70px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {

    const classes = styleAppbar();
    const history = useHistory();
    const [showNav, setShowNav] = useState(false);

    function HandleOnclick() {
        history.push('/home')
    }


    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{background: '#006666'}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={() => setShowNav(!showNav)}/>
                    </IconButton>
                    <Button onClick={HandleOnclick}>
                        <img src={logo2} alt="logo2" className={classes.logo}/>
                        <Typography style={{textTransform: 'none', marginTop:"15px", fontSize:"25px", color:"white", padding:"5px"}}>
                            ox Office
                        </Typography>
                    </Button>

                    <TopMenu/>

                </Toolbar>
            </AppBar>
            {
                (showNav)?<SideMenu/>:null
            }
        </div>
    );
}
