import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import PreviousPageIcon from "@material-ui/icons/KeyboardArrowLeft";
import NextPageIcon from "@material-ui/icons/KeyboardArrowRight";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        padding: 0,
    },
    pageButtonLabel: {
        width: 'auto',
        minWidth: 'auto',
    },
    pageNum: {
        display: 'inline-block',
        padding: '0 3px',
        backgroundColor: '#fff',
        border: 'none',
        fontSize: '1em',
    },
    active: {
        color: '#fd7e14',
    },
}));

const Paging = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <IconButton
                className={classes.iconButton}
            >
                <PreviousPageIcon/>
            </IconButton>
            <Button
                classes={{label: classes.pageButtonLabel, root: classes.pageButtonLabel}}
                className={`${classes.pageNum} ${classes.active}`}
            >
                1
            </Button>
            <Button
                classes={{label: classes.pageButtonLabel, root: classes.pageButtonLabel}}
                className={`${classes.pageNum}`}
            >
                2
            </Button>
            <Button
                classes={{label: classes.pageButtonLabel, root: classes.pageButtonLabel}}
                className={`${classes.pageNum}`}
            >
                3
            </Button>
            <Button
                classes={{label: classes.pageButtonLabel, root: classes.pageButtonLabel}}
                className={`${classes.pageNum}`}
            >
                4
            </Button>
            <Button
                classes={{label: classes.pageButtonLabel, root: classes.pageButtonLabel}}
                className={`${classes.pageNum}`}
            >
                5
            </Button>
            <IconButton
                className={classes.iconButton}
            >
                <NextPageIcon/>
            </IconButton>
        </div>
    );
};

export default Paging;