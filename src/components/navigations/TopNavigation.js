import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    noDisplay: {
        display: 'none',
    },
    noPadding: {
        padding: 0,
        minWidth: '24px',
    },
    topNavigation: {
        borderBottom: '1px solid #dee2e6',
    },
    indicator: {
        backgroundColor: '#212529',
    },
    navLink: {
        color: 'rgba(0, 0, 0, 0.8)',
        textDecoration: 'none',
        flexGrow: '1',
        maxWidth: 'none',
        flexBasis: 0,
        flexShrink: 1,
        textAlign: 'center',
    },
}));

const TopNavigaiton = ({tabValue}) => {
    const classes = useStyles();
    // const [value, setValue] = React.useState(0);
    //
    // function handleChange(event, newValue) {
    //     setValue(newValue);
    // }

    return (
        <Tabs
            value={tabValue}
            //indicatorColor="primary"
            //textColor="primary"
            //variant="fullWidth"
            aria-label="full width tabs example"
            className={classes.topNavigation}
            classes={{ indicator: classes.indicator }}
        >
            <Tab className={classes.noDisplay}/>
            <Tab className={classes.noDisplay}/>

            <NavLink to="/profile" className={`${classes.navLink}`}>
                <Tab className={classes.noPadding} icon={<AccountCircleOutlinedIcon />} />
            </NavLink>
            <NavLink to="/friends" className={`${classes.navLink}`}>
                <Tab className={classes.noPadding} icon={<PeopleOutlinedIcon />} />
            </NavLink>
            <NavLink to="/time-line" className={`${classes.navLink}`}>
                <Tab className={classes.noPadding} icon={<DateRangeOutlinedIcon />} />
            </NavLink>
            <NavLink to="/notifications" className={`${classes.navLink}`}>
                <Tab className={classes.noPadding} icon={<NotificationsNoneOutlinedIcon />} />
            </NavLink>
            <NavLink to="/settings" className={`${classes.navLink}`}>
                <Tab className={classes.noPadding} icon={<SettingsOutlinedIcon />} />
            </NavLink>
        </Tabs>
    );
};

export default TopNavigaiton;