import React from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: "none"
    },
    paper: {
        outline: 'none'
    },
    image: {
        maxHeight: "calc(100vh + 3px)",
        maxWidth: "100vw",
        position: "relative",
        zIndex: "4"
    }
}));


export default function ModalCustom(props) {
    const classes = useStyles();

    const renderBody = () => {
        if (props.type === "image")
            return (
                <div className={classes.paper}>
                    <img className={classes.image} src={props.image}></img>
                    <Link className="closebtn" onClick={() => { props.onClose() }}><i className="mdi mdi-close"/></Link>
                    <div class="loader"></div>
                </div>
            );
        if (props.type === "video")
            return (
                <div className={classes.paper}>
                    <div class="loader"></div>
                    <iframe src={props.video} frameborder="0" allow="autoplay; fullscreen"
                        allowfullscreen>
                    </iframe>
                    <Link className="closebtn" onClick={() => { props.onClose() }}><i className="mdi mdi-close"/></Link>
                </div >
            )
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    {renderBody()}
                </Fade>
            </Modal>
        </div>
    );
}