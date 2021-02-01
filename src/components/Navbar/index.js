import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: `rgb(40, 40, 40, 1);`,
        zIndex: "7",
        [theme.breakpoints.down('sm')]: {
            marginTop: `-56px`
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: `-64px`
        }
    },
    button: {
        color: `white`,
        "&:hover": {
            backgroundColor: `rgb(55, 55, 55);`
        },
    }
}));

function Navbar(props) {
    const classes = useStyles();
    
    return (
        <AppBar elevation={0} className={classes.appbar} position="sticky">
            <Toolbar style={{ zIndex: 3 }} >
                <Link to="aboutContainer" offset={4} spy={true} smooth={true}><Button size="small" className={classes.button}>About</Button></Link>
                <Link to="projectsContainer" offset={4} spy={true} smooth={true}><Button size="small" className={classes.button}>Projects</Button></Link>
                <Link to="contactContainer" spy={true} smooth={true}><Button size="small" className={classes.button}>Contact</Button></Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;