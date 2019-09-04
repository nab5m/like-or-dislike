import React from 'react';
import DefaultAppBar from "../components/navigations/DefaultAppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BottomNavigation from "../components/navigations/BottomNavigation";
import ListOwnerSwitch from "../components/home-page/ListOwnerSwitch";
import TopNavigation from "../components/navigations/TopNavigation";
import RealTimeSearchRank from "../components/home-page/RealTimeSearchRank";
import BookmarkList from "../components/home-page/BookmarkList";
import Polls from "../components/home-page/Polls";

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
            <TopNavigation />

            <ListOwnerSwitch />

            <div className={classes.contents}>
                <RealTimeSearchRank/>
                <BookmarkList/>
                <Polls/>
                <Polls/>
            </div>

            <BottomNavigation/>
        </div>
    );
};

export default HomePage;