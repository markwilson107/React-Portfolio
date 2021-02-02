import React from "react";
import "./style.css";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// React scroll
import {Link} from 'react-scroll';
// Utils
import { ModalContext } from "../../utils/modalContext";

function Footer() {
  let { handleModal } = React.useContext(ModalContext);

  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Mark Wilson
            </Typography>
            <Typography variant="body2">
              Web Development Portfolio.<br />
              <a href="https://github.com/markwilson107" target="_blank">Github</a>
              <a href="https://www.linkedin.com/in/markwilson107/" target="_blank" style={{paddingLeft: "10px", paddingRight: "10px"}}>Linkedin</a>
              <a style={{cursor: "pointer"}} onClick={() => {handleModal("pdf", './RESUME2020-MarkWilson.pdf')}}>Resume</a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Explore
            </Typography>
            <Typography variant="body2">
              <ul>
                <li><Link style={{cursor: "pointer"}} to="aboutContainer" offset={1} spy={true} smooth={true}>About</Link></li>
                <li><Link style={{cursor: "pointer"}} to="projectsContainer" offset={4} spy={true} smooth={true}>Projects</Link></li>
                <li><Link style={{cursor: "pointer"}} to="contactContainer" spy={true} smooth={true}>Contact</Link></li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Contact
            </Typography>
            <Typography variant="body2">
              <ul>
                <li><a href="mailto:markashwilson@gmail.com">Email</a></li>
                <li><a href="Tel:61492803794">Call</a></li>
                <li><Link style={{cursor: "pointer"}} to="contactContainer" spy={true} smooth={true}>Inquiry</Link></li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>


    </footer >
  );
}

export default Footer;
