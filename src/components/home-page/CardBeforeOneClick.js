import React from 'react';
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngry as AngryBorderIcon} from "@fortawesome/free-regular-svg-icons";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    iconButton: {
        padding: '0',
    },
    icon: {
        color: '#adb5bd',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

const CardBeforeOneClick = ({cardSide, handleClickIconFirst}) => {
    const classes = useStyles(); // ToDo: duplicated

    return (
        <CardActions className={classes.cardActions}>
            <IconButton
                aria-label="add to favorites"
                onClick={() => handleClickIconFirst(cardSide, 'heart')}
                className={classes.iconButton}
            >
                <FavoriteBorderIcon className={classes.icon} />
            </IconButton>
            <IconButton
                aria-label="share"
                className={classes.iconButton}
                onClick={() => handleClickIconFirst(cardSide, 'angry')}
            >
                <FontAwesomeIcon icon={AngryBorderIcon} className={classes.icon} />
            </IconButton>
        </CardActions>
    );
};

export default CardBeforeOneClick;