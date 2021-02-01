import React from "react";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//Components
import Labels from "../components/Labels";
import Bio from "../components/Bio";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    center: {
        textAlign: 'center'
    },
    spacing: {
        paddingTop: '80px',
        paddingBottom: '80px'
    },
    paddingBottom: {
        paddingBottom: '60px'
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <div id="aboutContainer" className={`${classes.root} ${classes.spacing}`}>
            <Typography className={`${classes.center} ${classes.paddingBottom}`} variant="h4">
                ABOUT
            </Typography>
            <Labels />
            <Bio />
        </div>
    )
}

export default About;