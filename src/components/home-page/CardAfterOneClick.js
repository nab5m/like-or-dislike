import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngry as AngryBorderIcon} from "@fortawesome/free-regular-svg-icons";
import {faAngry as AngryIcon} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    iconButtonAfterOneClick: {
        padding: '0',
        margin: '0',
        width: '20%',
    },
    iconAfterOneClick: {
        color: '#adb5bd',
        fontSize: '0.8em',
    },
    iconFilled: {
        color: '#fd7e14',
        fontSize: '0.8em',
    },
    cardActionsAfterOneClick: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10.4px 0',
    },
}));

const CardAfterOneClick = ({cardSide, icon, rating, handleClickIconAfterFirst}) => {
    const classes = useStyles(); // ToDo: duplicated
    const iconButtons = [];
    const Icon = icon === 'heart'
        ? <FavoriteBorderIcon className={classes.iconAfterOneClick} />
        : <FontAwesomeIcon icon={AngryBorderIcon} className={classes.iconAfterOneClick} />;
    const IconFilled = icon === 'heart'
        ? <FavoriteIcon className={classes.iconFilled} />
        : <FontAwesomeIcon icon={AngryIcon} className={classes.iconFilled} />;

    if(icon === 'heart') {
        for(let i=1; i<rating+1; i++) {
            iconButtons.push(
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleClickIconAfterFirst(cardSide, i)}
                    className={classes.iconButtonAfterOneClick}
                    key={i}
                >
                    { IconFilled }
                </IconButton>
            );
        }
        for(let i=rating+1; i<=5; i++) {
            iconButtons.push(
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleClickIconAfterFirst(cardSide, i)}
                    className={classes.iconButtonAfterOneClick}
                    key={i}
                >
                    { Icon }
                </IconButton>
            );
        }
    } else { // 'angry'
        for(let i=5; i>=rating+1; i--) {
            iconButtons.push(
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleClickIconAfterFirst(cardSide, i)}
                    className={classes.iconButtonAfterOneClick}
                    key={i}
                >
                    { Icon }
                </IconButton>
            );
        }
        for(let i=rating; i>=1; i--) {
            iconButtons.push(
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleClickIconAfterFirst(cardSide, i)}
                    className={classes.iconButtonAfterOneClick}
                    key={i}
                >
                    { IconFilled }
                </IconButton>
            );
        }
    }

    return (
        <CardActions className={classes.cardActionsAfterOneClick}>
            { iconButtons }
        </CardActions>
    );
};

export default CardAfterOneClick;