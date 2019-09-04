import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const useStyles = makeStyles((theme) => ({
    noPadding: {
        padding: 0,
        minWidth: '24px',
    },
    topNavigation: {
        borderBottom: '1px solid #dee2e6',
    },
    indicator: {
        backgroundColor: '#212529',
    }
}));

const TopNavigaiton = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(-1);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            //indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            className={classes.topNavigation}
            classes={{ indicator: classes.indicator }}
        >
            <Tab className={classes.noPadding} icon={<AccountCircleOutlinedIcon />} />
            <Tab className={classes.noPadding} icon={<PeopleOutlinedIcon />} />
            <Tab className={classes.noPadding} icon={<DateRangeOutlinedIcon />} />
            <Tab className={classes.noPadding} icon={<NotificationsNoneOutlinedIcon />} />
            <Tab className={classes.noPadding} icon={<SettingsOutlinedIcon />} />
        </Tabs>
    );
};

export default TopNavigaiton;