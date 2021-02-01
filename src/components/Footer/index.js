import React from "react";
import "./style.css";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Footer() {
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
              <a class="open-resume" href="">Resume</a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Explore
            </Typography>
            <Typography variant="body2">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Contact
            </Typography>
            <Typography variant="body2">
              <ul>
                <li><a href="mailto:markwilson107@hotmail.com">Email</a></li>
                <li><a href="Tel:61492803794">Call</a></li>
                <li><a class="contact-btn" href="">Inquiry</a></li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>


    </footer >
  );
}

export default Footer;
