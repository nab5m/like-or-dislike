import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: '16px',
    },
    header: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    titleBox: {
        display: 'flex',
        alignContent: 'center',
        '&>.title-icon': {
            color: '#fd7e14',
            marginRight: '4px',
        }
    },
    orderOptionBox: {
        display: 'flex',
        alignContent: 'center',
        color: '#adb5bd',
    },
    iconButton: {
        padding: 0,
    },

    menuItemRoot: {
        fontSize: '0.9em',
    },
}));

const CardModalContentBox = ({icon, title, children}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.titleBox}>
                    { icon } {title}
                </div>

                {/* ToDo: orderOptionBox -> Component */}
                <div className={classes.orderOptionBox}>
                    최신순
                    <IconButton
                        className={classes.iconButton}
                        onClick={handleClick}
                    >
                        <ExpandMoreIcon fontSize="inherit"/>
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem
                            dense
                            selected
                            onClick={handleClose}
                            classes={{root: classes.menuItemRoot}}
                        >
                            최신순
                        </MenuItem>
                        <MenuItem
                            dense
                            onClick={handleClose}
                            classes={{root: classes.menuItemRoot}}
                        >
                            오래된순
                        </MenuItem>
                        <MenuItem
                            dense
                            onClick={handleClose}
                            classes={{root: classes.menuItemRoot}}
                        >
                            인기순
                        </MenuItem>
                    </Menu>

                </div>
            </div>
            { children }
        </div>
    );
};

export default CardModalContentBox;