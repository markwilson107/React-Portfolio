import React from "react";
import "./style.css";
import Typewriter from 'typewriter-effect';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//React scroll
import {Link} from 'react-scroll'
// Components
import Squares from "../Squares";

const useStyles = makeStyles((theme) => ({
    button: {
        zIndex: 11,
        marginTop: "40px"
    },
    typography: {
        color: 'white'
    }
}));

function Banner(props) {
    const classes = useStyles();
    const { bannerImg, bannerTitle } = props;
    return (
        <div>
            <Squares />
            <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
            </div>
            <div className="banner-title">
                <Typography className={classes.typography} variant="h4">HELLO, {`I'M`} <a className="banner-name" href="https://github.com/markwilson107" target="_blank">MARK WILSON</a><br />IM A FULL-STACK WEB DEVELOPER</Typography>
            </div>
            <div className="view-work">
                <Typography className={classes.typography} variant="body1">
                    <Typewriter
                        options={{
                            strings: ['HTML  |  CSS |  JAVASCRIPT  |  NODE.JS  |  REACT', 'PHOTOSHOP  |  LIGHTROOM  |  PREMIERE PRO'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Typography>
                <Link to="aboutContainer" offset={1} spy={true} smooth={true}><Button className={classes.button} variant="contained">View my work</Button></Link>
            </div>
        </div>
    )
}

export default Banner;