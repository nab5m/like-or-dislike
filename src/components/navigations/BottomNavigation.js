import React from 'react';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    bottomNavigation: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        borderTop: '1px solid #dee2e6',
        zIndex: '1000',
        backgroundColor: '#fff',
    },
    topIndicator: {
        transform: 'translateY(-46px)',
        backgroundColor: '#212529',
    }
}));

const BottomNavigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            className={classes.bottomNavigation}
            classes={{ indicator: classes.topIndicator }}
        >
            <Tab label="VS" />
            <Tab label="시리즈" />
        </Tabs>
    );
};

export default BottomNavigation;