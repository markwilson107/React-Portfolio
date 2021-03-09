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
// Utils
import { ModalContext } from "../../utils/modalContext";

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

    let { handleModal } = React.useContext(ModalContext);

    return (
            <Container maxWidth="lg" className={`${classes.spacing}`}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className={`${classes.center}`}>
                        <img className="bio-img" src="./profile-image.jpg" />
                        <Typography variant="body2"><br />
                        <strong>Hello, I'm Mark.</strong><br />
                        An Australian Web Developer with a<br />
                        passion for creating premium and intuitive<br />
                        web experiences.<br /><br />Lets work together.<br /><br />

                            <Link style={{cursor: "pointer"}} onClick={() => {handleModal("pdf", './RESUME2020-MarkWilson.pdf')}}>
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
                        <br /><br />
                        <Typography variant="body1">HTML</Typography>
                        <ProgressBar completed={90} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">CSS</Typography>
                        <ProgressBar completed={90} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">Javascript</Typography>
                        <ProgressBar completed={80} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">Node.js</Typography>
                        <ProgressBar completed={80} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">React.js</Typography>
                        <ProgressBar completed={70} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                        <br />
                        <Typography variant="body1">Adobe Suite
                        <Tooltip disableFocusListener title="Photoshop &nbsp;|&nbsp; Lightroom &nbsp;|&nbsp; Premiere Pro" placement="right">
                                <i className="mdi mdi-information" style={{ color: "#282828", marginLeft: "5px", cursor: "pointer" }} />
                            </Tooltip>
                        </Typography>
                        <ProgressBar completed={70} bgcolor={"#008cff"} isLabelVisible={0} borderRadius={0} />
                    </Grid>
                </Grid>
            </Container>
    );
}

export default Bio;