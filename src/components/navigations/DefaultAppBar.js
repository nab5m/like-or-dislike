import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#fd7e14',
        color: '#f8f9fa',
    },
    searchBox: {
        display: 'flex',
        width: '100vw',
        height: '36px',
        borderBottom: '1px solid #f8f9fa',
    },
    searchPrefix: {
        display: 'flex',
        height: '36px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hashTag: {
        fontSize: '1.2em',
        paddingLeft: '3px',
        color: '#212529',
    },
    searchInput: {
        display: 'inline-block',
        color: 'black',
        lineHeight: '36px',
        paddingLeft: '3px',
    },
    navLink: {
        textDecoration: 'none',
        color: '#fff',
        height: '24px',
    },
}));

const DefaultAppBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>

                    <IconButton
                        className={classes.iconButton}
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <NavLink to="/home" className={classes.navLink}>
                            <HomeIcon />
                        </NavLink>
                    </IconButton>

                {/* SearchBox */}
                <div className={classes.searchBox}>
                    <SearchIcon className={`${classes.searchPrefix}`} />
                    <Typography component="span" className={`${classes.searchPrefix} ${classes.hashTag}`}>
                        #
                    </Typography>

                    <InputBase className={classes.searchInput} inputProps={{className: classes.searchInput}}/>
                </div>

                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    className={classes.iconButton}
                    // aria-controls={menuId}
                    // aria-haspopup="true"
                    // onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <CreateIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default DefaultAppBar;