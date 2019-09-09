import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardModalContentBox from "./CardModalContentBox";

const useStyles = makeStyles(theme => ({

}));

const CardDescription = () => {
    const classes = useStyles();

    return (
        <CardModalContentBox
            title="설명"
            icon={<DescriptionIcon className="title-icon" />}
        >

        </CardModalContentBox>
    );
};

export default CardDescription;