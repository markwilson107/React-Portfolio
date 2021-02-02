import React from 'react';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import { ModalContext } from "../../utils/modalContext";

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
    },
    iframe: {
        position: "relative",
        margin: "0px",
        border: "0",
        borderImageSource: "initial",
        borderImageSlice: "initial",
        borderImageWidth: "initial",
        borderImageOutset: "initial",
        borderImageRepeat: "initial",
        minWidth: "0px",
        maxWidth: "100vw",
        minHeight: "0px",
        maxHeight: "none",
        width: "100vw",
        height: "calc(100vh + 3px)",
        zIndex: "4"
    },
    pdf: {
        height: "calc(100vh + 3px)",
        width: "100vw",
        position: "relative",
        zIndex: "4"
    },
    closebtn: {
        position: "absolute",
        top: "20px",
        right: "20px",
        fontSize: "40px",
        zIndex: "5",
        color: "white!important",
        textDecoration: "none!important",
        cursor: "pointer"
    }
}));


export default function ModalCustom(props) {
    const classes = useStyles();

    let { modalType, modalSrc, handleModal, modal } = React.useContext(ModalContext);

    const renderBody = () => {
        if (modalType === "image")
            return (
                <div className={classes.paper}>
                    <img className={classes.image} src={modalSrc}></img>
                    <Link className={classes.closebtn} onClick={() => { handleModal() }}><i className="mdi mdi-close" /></Link>
                    <div class="loader"></div>
                </div>
            );
        if (modalType === "video")
            return (
                <div className={classes.paper}>
                    <div className="loader"></div>
                    <iframe className={classes.iframe} src={modalSrc} frameborder="0" allow="autoplay; fullscreen"
                        allowfullscreen>
                    </iframe>
                    <Link className={classes.closebtn} onClick={() => { handleModal() }}><i className="mdi mdi-close" /></Link>
                </div >
            )
        if (modalType === "pdf")
            return (
                <div className={classes.paper}>
                    <div className="loader"></div>
                    <object className={classes.pdf} data={modalSrc}>
                        <p>Oops! Your browser doesn't support PDFs!</p>
                        <p><a style={{color: "white"}} href={modalSrc}>Download Instead</a></p>
                    </object>
                    <Link className={classes.closebtn} onClick={() => { handleModal() }}><i className="mdi mdi-close" /></Link>
                </div >
            )
        return (
            <div>oops, an error occurred</div>
        )
    }

    return ReactDOM.createPortal(
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal}>
                    {renderBody()}
                </Fade>
            </Modal>
        </div>
        , document.querySelector("#modal-root")
    );
}