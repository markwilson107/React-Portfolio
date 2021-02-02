import React, { useState, useEffect } from "react";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// Components
import GridItemMedia from '../components/GridItemMedia';
import Modal from '../components/Modal';
//Utils
import mediaAPI from '../utils/API/mediaAPI' 
import { ModalContext } from "../utils/modalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  center: {
    textAlign: 'center'
  },
  spacing: {
    paddingTop: '40px',
    paddingBottom: '80px'
  },
  paddingBottom: {
    paddingBottom: '60px'
  },
  white: {
    color: 'white'
  }
}));

const Media = () => {
  const classes = useStyles();

  let { handleModal } = React.useContext(ModalContext);

  return (
    <div className={`${classes.root} ${classes.spacing}`}>

      <Typography className={`${classes.center} ${classes.paddingBottom} ${classes.white}`} variant="h4">
        MEDIA
      </Typography>
      <Container maxWidth="md">
        <Grid container spacing={0}>
          {
            mediaAPI.map((result, index) => (
              <Grid item xs={4} >
                <Link onClick={() => handleModal("image", mediaAPI[index].image)}> 
                  <GridItemMedia item={result} />
                </Link>
              </Grid>
            ))
          }
        </Grid>
      </Container>
      
    </ div>
  );
};

export default Media;