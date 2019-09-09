import React from 'react';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useSpring, animated } from 'react-spring';
import CardGallery from "./CardGallery";
import CardDescription from "./CardDescription";
import CardComments from "./CardComments";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        boxSizing: 'border-box',
        width: '90vw',
        height: '80vh',
        overflowY: 'scroll',
        backgroundColor: theme.palette.background.paper,
        //border: '2px solid #000',
        padding: theme.spacing(1, 2, 3), // 위, 옆, 아래
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const {in: open, children, onEnter, onExited, ...other} = props;
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: open ? 1 : 0},
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});


// ToDo: Why selected box has yellow border?
const CardDetailModal = ({open, handleClose}) => {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                //timeout: 300,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="spring-modal-title">고양이</h2>
                    <CardGallery/>
                    <CardDescription/>
                    <CardComments/>
                </div>
            </Fade>
        </Modal>
    );
};

export default CardDetailModal;