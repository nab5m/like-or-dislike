import React from 'react';
import DefaultAppBar from "../components/navigations/DefaultAppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BottomNavigation from "../components/navigations/BottomNavigation";
import TopNavigation from "../components/navigations/TopNavigation";

const useStyles = makeStyles((theme) => ({
    '@global': {
        '#root': {
            height: '100vh',
            fontSize: '16px',
        }
    },
    container: {
        height: '100vh',
    },
    contents: {
        padding: '0 1.5em',
        marginBottom: '64px',
    }
}));

const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <DefaultAppBar />
            <TopNavigation tabValue={5} />

            <div className={classes.contents}>
                준비중...
            </div>

            <BottomNavigation/>
        </div>
    );
};

export default HomePage;