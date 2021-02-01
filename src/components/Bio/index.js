import React from "react";
import "./style.css";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
// - Icons
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// Progress bar
import ProgressBar from "@ramonak/react-progress-bar";

const useStyles = makeStyles((theme) => ({
    center: {
        textAlign: 'center'
    },
    spacing: {
        paddingTop: '60px'
    }
}));

function Bio(props) {
    const classes = useStyles();

    const preventDefault = (event) => event.preventDefault();

    return (
            <Container maxWidth="lg" className={`${classes.spacing}`}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className={`${classes.center}`}>
                        <img className="bio-img" src="./profile-image.jpg" />
                        <Typography variant="body2"><br />
                        Hello, I am Mark Wilson, a Web Developer with a passion<br />
                        for creating high-quality, responsive, beautiful websites<br />
                        with the users experience being top priority.<br /><br />
                            <Link href="#" onClick={preventDefault}>
                                <Tooltip title="Resume" placement="bottom">
                                    <DescriptionIcon style={{ color: "black", fontSize: 40 }} />
                                </Tooltip>
                            </Link>
                            <Link href="https://github.com/markwilson107" rel="noopener" target="_blank">
                                <Tooltip title="Github" placement="bottom">
                                    <GitHubIcon style={{ color: "black", fontSize: 40, paddingLeft: 15, paddingRight: 15 }} />
                                </Tooltip>
                            </Link>
                            <Link href="https://www.linkedin.com/in/markwilson107/" rel="noopener" target="_blank">
                                <Tooltip title="Linkedin" placement="bottom">
                                    <LinkedInIcon style={{ color: "black", fontSize: 41 }} />
                                </Tooltip>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Typography variant="body1">HTML</Typography>
                        <ProgressBar completed={80} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">CSS</Typography>
                        <ProgressBar completed={80} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">Javascript</Typography>
                        <ProgressBar completed={70} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">Node.js</Typography>
                        <ProgressBar completed={70} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">React</Typography>
                        <ProgressBar completed={60} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">Adobe Suite
                        <Tooltip disableFocusListener title="Photoshop &nbsp;|&nbsp; Lightroom &nbsp;|&nbsp; Premiere Pro" placement="right">
                                <i className="mdi mdi-information" style={{ color: "#282828", marginLeft: "5px", cursor: "pointer" }} />
                            </Tooltip>
                        </Typography>
                        <ProgressBar completed={60} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                    </Grid>
                </Grid>
            </Container>
    );
}

export default Bio;