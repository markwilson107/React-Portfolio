import React from "react";
import "./style.css";

function GridFeature(props) {
    return (
        <div className="label">
            <div className="label-icon"><i className={props.labelIcon}></i></div>
        </div>
    );
  }
  
  export default GridFeature;