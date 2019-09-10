import React, {useState} from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardModalContentBox from "./CardModalContentBox";
import Paging from "../../navigations/Paging";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReportIcon from "@material-ui/icons/GavelOutlined";

const useStyles = makeStyles(theme => ({
    listContainer: {
        padding: '0',
    },
    listItem: {
        listStyle: 'none',
        borderBottom: '1px solid #adb5bd',
        padding: '8px 8px',
    },
    iconButton: {
        position: 'relative',
        padding: 0,
        color: '#fd7e14',
    },
    iconLabel: {
        color: '#adb5bd',
        fontSize: '0.5em',
        position: 'absolute',
        top: '-10px',
    },
    descriptionDateTime: {
        color: '#adb5bd',
        marginTop: '8px',
    },
    descriptionInfoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

const CardDescription = () => {
    const classes = useStyles();
    const [state] = useState({
        page: 1,
        // endPage
        descriptions: [
            {
                content: "치명적 매력... 못말리는 고양이의 엉뚱 매력 속으로 풍덩 빠져봐요",
                writerNickname: "jnuyonug",
                dateTime: '1999-04-20 14:24:32',
            },
            {
                content: "지구의 절대자",
                writerNickname: "준뮤다 영각지대",
                dateTime: '1999-04-20 14:24:32',
            },
            {
                content: "환장의 포켓몬",
                writerNickname: "준뮤다 영각지대",
                dateTime: '1999-04-20 14:24:32',
            },
            {
                content: "꽁냥꽁냥",
                writerNickname: "축구천재 김준녕",
                dateTime: '1999-04-20 14:24:32',
            },
            {
                content: "식빵좋다냥",
                writerNickname: "수달",
                dateTime: '1999-04-20 14:24:32',
            },
        ],
    });

    const descriptionList = state.descriptions.map(
        ({content, writerNickname, dateTime}, idx) => {
            return (
                <li className={classes.listItem} key={idx}>
                    {content}
                    <div className={classes.descriptionDateTime}>{dateTime}</div>
                    <div className={classes.descriptionInfoWrapper}>
                        <span>{writerNickname}</span>
                        <div className={classes.actionBox}>
                            <IconButton
                                className={`${classes.iconButton}`}
                                //onClick={handleClick}
                            >
                                <FavoriteBorderIcon />
                                <div className={classes.iconLabel}>503</div>
                            </IconButton>
                            <IconButton
                                className={classes.iconButton}
                                //onClick={handleClick}
                            >
                                <ReportIcon />
                            </IconButton>
                        </div>
                    </div>
                </li>
            );
        }
    );

    return (
        <CardModalContentBox
            title="설명"
            icon={<DescriptionIcon className="title-icon" />}
        >
            <ul className={classes.listContainer}>
                { descriptionList }
            </ul>

            <Paging />
        </CardModalContentBox>
    );
};

export default CardDescription;