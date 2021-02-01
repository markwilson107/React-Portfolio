import React from "react";
import "./style.css";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f0f0f0",
        paddingTop: "20px",
        paddingBottom: "40px",
        textAlign: "center"
    },
    text: {
        textAlign: 'center',
        color: 'black',
        paddingBottom: "20px"
    },
    contactForm: {
        width: "100%",
        padding: "10px"
    },
    inputForm: {
        width: "100%",
    },
    grey: {
        color: "grey"
    }
}));

function ContactMe() {
    const classes = useStyles();

    return (
        <div id="contactContainer" className={`brands ${classes.root}`}>
            <Typography className={classes.text} variant="body1">
                CONTACT ME
            </Typography>
            <Container maxWidth="sm">
                <Grid container spacing={3}>
                    <form className={classes.contactForm} action="https://formspree.io/f/mknpewkp" method="POST">
                        <Grid item xs={12} style={{ paddingTop: "20px" }}>
                            <TextField
                                id="standard-basic"
                                label="Name"
                                variant="outlined"
                                type="text"
                                name="name"
                                className={classes.inputForm}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: "20px" }}>
                            <TextField
                                id="standard-basic"
                                label="Email"
                                variant="outlined"
                                type="text"
                                name="_replyto"
                                className={classes.inputForm}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: "20px" }}>
                            <TextField
                                id="standard-multiline-static"
                                label="Message"
                                name="message"
                                variant="outlined"
                                multiline
                                rows={4}
                                type="text"
                                className={classes.inputForm}
                            />

                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: "20px" }}>
                            <Button type="submit" variant="outlined">Send</Button>
                        </Grid>
                    </form>
                </Grid>
            </Container>
            <Typography style={{ paddingTop: "20px", color: "grey" }} variant="body2">
                Alternatively email me  <a href="mailto:markashwilson@gmail.com">here</a>
            </Typography>
        </div>
    );
}

export default ContactMe;