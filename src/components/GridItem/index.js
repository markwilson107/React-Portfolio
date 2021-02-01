import React from "react";
import "./style.css";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    projectGrid: {
        position: "relative",
        textAlign: "center",
        color: "white",
        height:"100%",
        overflow: "hidden"
    },
    img: {
        transition: ".3s ease",
        width: "100%",
        height: "100%" 
    },
    projectGridOverlay: {
        padding: "10px",
        position: "absolute",
        top: "15%",
        width: "calc(100% - 20px)",
        opacity: "0",
        transition: ".3s ease",
        "&:hover": {
            opacity: "100%",
            top: "20%",
        }
    },
    projectGridButtons: {
        position: "absolute",
        bottom: "5%",
        left: "calc(50% - 78px)",
        opacity: "0",
        transition: ".3s ease"
    }
  }));

function GridItem(props) {
    const classes = useStyles();

    return (
        <div className={classes.projectGrid}>
            <img className={classes.img} src={props.item.thumbnail} alt={props.item.name} />
            <div className={classes.projectGridOverlay} >
                <Typography variant="h6" >{props.item.name}</Typography>
                <br />
                <Typography variant="body2">{props.item.description}</Typography>
            </div>
            <div className={classes.projectGridButtons}>
                <ButtonGroup disableElevation variant="contained">
                    <Button target="_blank" href={props.item.url} rel="noopener">Demo</Button>
                    <Button target="_blank" href={props.item.github} rel="noopener">Github</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default GridItem;