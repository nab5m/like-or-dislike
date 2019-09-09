import React, {useState} from 'react';
import {Card as MaterialCard} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardBeforeOneClick from "./CardBeforeOneClick";
import CardAfterOneClick from "./CardAfterOneClick";
import CardDetailModal from "./card-modal/CardDetailModal";

const useStyles = makeStyles((theme) => ({
    pollContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '1em 0',
        borderBottom: '1px solid #dee2e6'
    },
    lastItem: {
        borderBottom: 'none',
    },

    cardImage: {
        width: '120px', // ToDo: responsive width
        height: '120px',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));


const Card = ({last}) => {
    const classes = useStyles();

    const [leftCardAction, setLeftCardAction] = useState({icon: null, rating: 0});
    const [rightCardAction, setRightCardAction] = useState({icon: null, rating: 0});

    const [leftCardModalOpen, setLeftCardModalOpen] = useState(false);
    const [rightCardModalOpen, setRightCardModalOpen] = useState(false);

    const handleOpenModal = (cardSide) => {
        if(cardSide === 'left') {
            setLeftCardModalOpen(true);
        }
        else if(cardSide === 'right') {
            setRightCardModalOpen(true);
        }
        else {
            console.log('(Card:handleOpenModal): invalid argument');
        }
    };
    const handleCloseModal = (cardSide) => {
        if(cardSide === 'left') {
            setLeftCardModalOpen(false);
        }
        else if(cardSide === 'right') {
            setRightCardModalOpen(false);
        }
        else {
            console.log('(Card:handleCloseModal): invalid argument');
        }
    };

    // cardSide = 'left' or 'right'
    // icon = 'heart' or 'angry'
    const handleClickIconFirst = (cardSide, icon) => {
        switch(cardSide)
        {
            case 'left':
                setLeftCardAction({...leftCardAction, icon: icon });
                break;
            case 'right':
                setRightCardAction({...rightCardAction, icon: icon });
                break;
            default:
                break;
        }
    };
    const handleClickIconAfterFirst = (cardSide, rating) => {
        switch(cardSide)
        {
            case 'left':
                setLeftCardAction({...leftCardAction, rating: rating });
                break;
            case 'right':
                setRightCardAction({...rightCardAction, rating: rating });
                break;
            default:
                break;
        }
    };

    const renderCardAction = (cardSide) => {
        switch(cardSide)
        {
            case 'left':
                if(leftCardAction.icon == null) {
                    return (<CardBeforeOneClick cardSide={cardSide} handleClickIconFirst={handleClickIconFirst} />);
                } else {
                    return (
                        <CardAfterOneClick
                            cardSide={cardSide}
                            icon={leftCardAction.icon}
                            rating={leftCardAction.rating}
                            handleClickIconAfterFirst={handleClickIconAfterFirst}
                        />
                    );
                }
            case 'right':
                if(rightCardAction.icon === null) {
                    return (<CardBeforeOneClick  cardSide={cardSide} handleClickIconFirst={handleClickIconFirst} />);
                } else {
                    return (
                        <CardAfterOneClick
                            cardSide={cardSide}
                            icon={rightCardAction.icon}
                            rating={rightCardAction.rating}
                            handleClickIconAfterFirst={handleClickIconAfterFirst}
                        />
                    );
                }
            default:
                break;
        }
    };

    return (
        <div className={last ? `${classes.pollContainer} ${classes.lastItem}` : classes.pollContainer}>
            <MaterialCard>
                <CardMedia
                    className={classes.cardImage}
                    image="data:image/jpeg;base64,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"
                    title="Paella dish"
                    onClick={() => handleOpenModal('left')}
                />
                { renderCardAction('left') }

                <CardDetailModal
                    open={leftCardModalOpen}
                    handleClose={() => handleCloseModal('left')}
                />
            </MaterialCard>
            <Typography>
                VS
            </Typography>
            <MaterialCard>
                <CardMedia
                    className={classes.cardImage}
                    image="data:image/jpeg;base64,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"
                    title="Paella dish"
                    onClick={() => handleOpenModal('left')}
                />
                { renderCardAction('right') }

                <CardDetailModal
                    open={rightCardModalOpen}
                    handleClose={() => handleCloseModal('right')}
                />
            </MaterialCard>
        </div>
    );
};

export default Card;