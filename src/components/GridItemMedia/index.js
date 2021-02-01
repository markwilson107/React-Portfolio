import React from "react";
import "./style.css";

function GridItemMedia(props) {
    return (
        <div className="media-grid">
            <img src={props.item.image} className="media-img" />
                <i className="mdi mdi-arrow-expand"/>
        </div>
    )
}

export default GridItemMedia;