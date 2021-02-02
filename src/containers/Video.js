import React, { useState, useEffect } from "react";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// Components
import GridItemVideo from '../components/GridItemVideo';
import Modal from '../components/Modal';
// Utils
import videoAPI from '../utils/API/videoAPI';
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
        paddingBottom: '140px'
    },
    paddingBottom: {
        paddingBottom: '60px'
    },
    white: {
        color: 'white'
    }
}));

const Video = () => {
    const classes = useStyles();

    let { handleModal } = React.useContext(ModalContext);

    return (
        <div className={`${classes.root} ${classes.spacing}`}>

            <Typography className={`${classes.center} ${classes.paddingBottom} ${classes.white}`} variant="h4">
                VIDEO
            </Typography>
            <Container maxWidth="md">
                <Grid container spacing={0}>
                    {
                        videoAPI.map((result, index) => {
                            if (result.id === 5)
                                return (
                                    <Grid item xs={8} >
                                        <Link onClick={() => handleModal("video", videoAPI[index].url)}>
                                            <GridItemVideo thumbnail={result.thumbnail} />
                                        </Link>
                                    </Grid>
                                )
                            return (
                                <Grid item xs={4} >
                                    <Link onClick={() => handleModal("video", videoAPI[index].url)}>
                                        <GridItemVideo thumbnail={result.thumbnail} />
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </ div>
    );
};

export default Video;