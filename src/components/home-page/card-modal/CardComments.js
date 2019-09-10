import CommentIcon from '@material-ui/icons/Comment';
import React, {useState} from 'react';
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

const CardComments = () => {
    const classes = useStyles();
    const [state] = useState({
        page: 1,
        // endPage
        descriptions: [
            {
                content: "이 세상에 제일 가는 말썽쟁이 짱구~ 천방지축 얼렁뚱땅 앞뒤짱구",
                writerNickname: "jnuyonug",
                dateTime: '1999-04-20 14:24:32',
            },
            {
                content: "짱구와 함께라면 뭐든지 할 수 있어~ 심심하지 답답하지 장난천재 저 하늘에 햇님 달님 사랑으로 비춰주면~",
                writerNickname: "준뮤다 영각지대",
                dateTime: '1999-04-20 14:24:32',
            },
            {
                content: "오늘은 또 무슨 장난 말썽쟁이 착한 짱구 마음 알 수 가 있을거야 친구들아 함께 가즈아",
                writerNickname: "준뮤다 영각지대",
                dateTime: '1999-04-20 14:24:32',
            },
            {
                content: "오늘은 무슨 장난을 꾸밀까~ 짱구는 못말려 오늘은 무슨 말썽을 부릴까~",
                writerNickname: "축구천재 김준녕",
                dateTime: '1999-04-20 14:24:32',
            },
            {
                content: "짱구는 못말려!@#$",
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
            title="댓글"
            icon={<CommentIcon className="title-icon" />}
        >
            <ul className={classes.listContainer}>
                { descriptionList }
            </ul>

            <Paging />
        </CardModalContentBox>
    );
};

export default CardComments;