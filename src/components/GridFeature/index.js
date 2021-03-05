import React from "react";
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./style.css";

function GridFeature(props) {
    return (
        <div className="project-grid-feature">
            <Grid container >
                <Grid item xs={12} sm={6} >
                    <img src='./projects/HODLR.png' alt="feature image" style={{ maxWidth: "auto", height: "310px", marginBottom: "-5px" }} />
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={6} style={{ color: "black", textAlign: "center" }}>
                        <img src='./projects/hodlr-logo-300.png' alt="feature image" style={{ maxWidth: "120px", paddingTop: "40px" }} />
                        <Typography variant="body2">Crypto currency tracking application.</Typography>
                        <div style={{ maxWidth: "250px", marginLeft: "auto", marginRight: "auto", paddingLeft: "25px", paddingBottom: "30px" }}>
                            <Grid container >
                                <Grid item xs={6} style={{ color: "black", textAlign: "left", paddingTop: "20px" }}>
                                    <Typography variant="body2">• Secure login</Typography>
                                    <Typography variant="body2">• MERN stack</Typography>
                                </Grid>
                                <Grid item xs={6} style={{ color: "black", textAlign: "left", paddingTop: "20px" }}>
                                    <Typography variant="body2">• Theme-able</Typography>
                                    <Typography variant="body2">• Mobile friendly</Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <Button target="_blank" href="https://hodlr.herokuapp.com/" rel="noopener" color="light" disableElevation variant="contained" style={{ marginRight: "10px", backgroundColor: "white" }}>Demo</Button>
                        <Button target="_blank" href="https://github.com/markwilson107/Hodlr" rel="noopener" disableElevation variant="contained" style={{ marginLeft: "10px", backgroundColor: "white" }}>Github</Button>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    );
}

export default GridFeature;