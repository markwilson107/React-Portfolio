import React from "react";
import "./style.css";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f0f0f0",
        paddingTop: "40px",
        paddingBottom: "40px",
        textAlign: "center"
    },
    text: {
        textAlign: 'center',
        color: 'black',
        paddingBottom: "20px"
    }
}));

function Brands() {
    const classes = useStyles();
    return (
        <div className={`brands ${classes.root}`}>
            <Typography className={classes.text} variant="body1">BRANDS I HAVE WORKED WITH</Typography>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <img src="./brands/Tourism-Western-Australia.jpg" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img src="./brands/TBWG-logo.jpg" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img src="./brands/TCWA.jpg" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Brands;