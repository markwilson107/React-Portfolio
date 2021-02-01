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
//API
import mediaAPI from '../utils/mediaAPI' 

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

  const [modalState, setModalState] = useState({ image: "" })

  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };


  const handleMediaClick = (index) => {
    setModalState({ image: mediaAPI[index].image });
    handleModalOpen();
  }

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
                <Link onClick={() => handleMediaClick(index)}>
                  <GridItemMedia item={result} />
                </Link>
              </Grid>
            ))
          }
        </Grid>
      </Container>
      <Modal open={openModal} onClose={handleModalClose} type="image" image={modalState.image} />
    </ div>
  );
};

export default Media;