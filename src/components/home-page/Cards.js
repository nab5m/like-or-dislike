import React, {useState} from 'react';
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Container from "@material-ui/core/Container";
import Card from "./Card";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: '1.2em',
        position: 'relative',
        padding: '0 0.2em',
        marginTop: '1em',
        borderBottom: '1px solid #dee2e6',
    },
    bookmarkBorderIcon: {
        padding: '0',
        position: 'absolute',
        right: '0',
        color: '#adb5bd',
        paddingTop: '4px',
    },
    bookmarkIcon: {
        padding: '0',
        position: 'absolute',
        right: '0',
        color: '#fd7e14',
        paddingTop: '4px',
    },
    hotItem: {
        color: '#fd7e14',
        position: 'relative',
        top: '-0.15em',
        right: '-0.15em',
        fontSize: '0.7em',
    },
}));

const Cards = () => {
    const classes = useStyles();
    const [bookmark, setBookmark] = useState(false);

    const toggleBookmark = () => { setBookmark(!bookmark); };

    return (
        <div>
            <Typography className={classes.heading}>
                # 동물 <sup className={classes.hotItem}><em>HOT!</em></sup>
                {
                    bookmark ?
                        <IconButton aria-label="add to favorites" onClick={toggleBookmark} className={classes.bookmarkIcon}>
                            <StarIcon />
                        </IconButton>
                        :
                        <IconButton aria-label="add to favorites" onClick={toggleBookmark} className={classes.bookmarkBorderIcon}>
                            <StarBorderIcon />
                        </IconButton>
                }
            </Typography>
            <Container>
                <Card />
                <Card last={true} />
            </Container>
        </div>
    );
};

export default Cards;