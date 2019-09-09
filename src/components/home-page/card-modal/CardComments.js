import React from 'react';
import CommentIcon from '@material-ui/icons/Comment';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardModalContentBox from "./CardModalContentBox";

const useStyles = makeStyles(theme => ({

}));

const CardComments = () => {
    const classes = useStyles();

    return (
        <CardModalContentBox
            title="댓글"
            icon={<CommentIcon className="title-icon" />}
        >

        </CardModalContentBox>
    );
};

export default CardComments;