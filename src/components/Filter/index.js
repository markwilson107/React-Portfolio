import React, { useEffect } from "react";
import "./style.css";
// Material UI
import Typography from '@material-ui/core/Typography';

function Filter(props) {

  const handleClick = (e) => {
    e.preventDefault();
    props.setFilterState({type: e.target.attributes.getNamedItem("data-value").value})
  }

  const filterActive = (filter) => {
    if (props.filterState.type === filter) {
      return "filter-active"
    }
  }

  return (
    <ul className="animatedunderlinemenu expandup">
      <Typography variant="body2">
        <li><a className={filterActive("all")} href="#" data-value="all" onClick={handleClick}>All</a></li>
        <li><a className={filterActive("html")} href="#" data-value="html" onClick={handleClick}>HTML</a></li>
        <li><a className={filterActive("css")} href="#" data-value="css" onClick={handleClick}>CSS</a></li>
        <li><a className={filterActive("javascript")} href="#" data-value="javascript" onClick={handleClick}>JavaScript</a></li>
        <li><a className={filterActive("nodejs")} href="#" data-value="nodejs" onClick={handleClick}>Node.js</a></li>
        <li><a className={filterActive("react")} href="#" data-value="react" onClick={handleClick}>React</a></li>
      </Typography>
    </ul>
  );
}

export default Filter;
