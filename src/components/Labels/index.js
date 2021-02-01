import React from "react";
import "./style.css";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//Components
import Label from "../Label";

const useStyles = makeStyles((theme) => ({
    center: {
        textAlign: 'center'
    },
    grey: {
        textAlign: 'center',
        color: 'grey'
    }
}));

function Labels(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                    <Label labelIcon="mdi mdi-cellphone-link" />
                    <Typography variant="h6" className={classes.center}>RESPONSIVE</Typography>
                    <Typography variant="body2" className={`${classes.center} ${classes.grey}`}>Layouts that work on all devices.</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Label labelIcon="mdi mdi-lightbulb-outline" />
                    <Typography variant="h6" className={classes.center}>INTUITIVE</Typography>
                    <Typography variant="body2" className={`${classes.center} ${classes.grey}`}>User focused design, easy to use UI/UX.</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Label labelIcon="mdi mdi-code-tags" />
                    <Typography variant="h6" className={classes.center}>CLEAN</Typography>
                    <Typography variant="body2" className={`${classes.center} ${classes.grey}`}>Clear and concise code is something I strive for.</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Label labelIcon="mdi mdi-speedometer" />
                    <Typography variant="h6" className={classes.center}>EFFICIENT</Typography>
                    <Typography variant="body2" className={`${classes.center} ${classes.grey}`}>Fast and lag free websites are my priority.</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Labels;