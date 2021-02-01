import React from "react";
import "./style.css";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function GridItem(props) {
    return (
        <div className="projectGrid">
            <img src={props.item.thumbnail} alt={props.item.name} style={{ width: "100%", height: "100%" }} />
            <div className="projectGridOverlay" >
                <Typography variant="h6" >{props.item.name}</Typography>
                <br />
                <Typography variant="body2">{props.item.description}</Typography>
            </div>
            <div className="projectGridButtons">
                <ButtonGroup disableElevation variant="contained">
                    <Button target="_blank" href={props.item.url} rel="noopener">Demo</Button>
                    <Button target="_blank" href={props.item.github} rel="noopener">Github</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default GridItem;