import React from "react";
import "./style.css";

function GridItemVideo(props) {
    return (
        <div className="media-grid">
            <img src={props.thumbnail} className="media-img" />
                <i className="mdi mdi-play"/>
        </div>
    )
}

export default GridItemVideo;