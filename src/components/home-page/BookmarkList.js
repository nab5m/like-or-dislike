import React, {useEffect, useRef} from 'react';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import makeStyles from "@material-ui/core/styles/makeStyles";
import StarIcon from '@material-ui/icons/Star';
import * as ReactDOM from "react-dom";

const useStyles = makeStyles((theme) => ({
    rankBox: {
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        boxShadow: 'none',
        margin: 0,
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.2em',
    },
    starIcon: {
        fontSize: '24px',
        marginRight: '5px',
        paddingBottom: '5px',
        color: '#fd7e14',
    },
    summaryRoot: {
        marginTop: '12px',
        padding: 0,
        minHeight: '30px !important',
        borderBottom: '1px solid #dee2e6',
    },
    summaryContent: {
        margin: '0 !important',
    },
    summaryExpanded: {
        marginTop: '12px',
        minHeight: '30px !important',
    },
    summaryExpandedButton: {
        minHeight: '24px !important',
        padding: '0 12px',
        marginTop: '0',
    },
    detailRoot: {
        padding: '0.5em 1em',
        justifyContent: 'center',
    },
    panelRoot: {
        marginTop: '0 !important',
    },
    detailParagraph: {
        width: '100%',
    },
}));

const BookmarkList = () => {
    const classes = useStyles();
    const boxReference = useRef();

    const list = [
        "동물", "취미", "TV프로그램", "남자아이돌", "여자아이돌",
        "롤챔피언", "드라마", "영화", "전공", "편의점",
    ];

    useEffect(() => {
        let box = boxReference;
        let copiedList = list.slice();
        copiedList = copiedList.map(item => "#" + item);

        box.current.innerHTML = copiedList;

        let boxWidth = box.current.clientWidth;
        let characterPerLine = Math.ceil((boxWidth / 16)-1); // fontSize: 16px

        let startIdx = 0;
        let accumulator = 0;
        let resultList = [];

        for(let i=0; i<copiedList.length; i++) {
            if(accumulator + copiedList[i].length > characterPerLine
                || i === copiedList.length-1)
            {
                let paragraph = "";
                let space = characterPerLine - accumulator + 1;

                for(let j=startIdx; j<i; j++) {
                    paragraph = j === i-1 ?
                        paragraph.concat(copiedList[j])
                        : paragraph.concat(copiedList[j] + ' '.repeat(Math.floor(space)));
                }

                resultList.push(paragraph);

                startIdx = i;
                accumulator = 0;
            }

            accumulator += copiedList[i].length;
        }

        resultList = resultList.map((item, idx) =>
            <pre key={idx} style={
                {
                    font: 'inherit',
                    width: '100%',
                    display: 'inline-block',
                    textAlign: 'center',
                    margin: '0',
                }
            }>{item}</pre>
        );

        ReactDOM.render(resultList, box.current);
    });

    return (
        <ExpansionPanel
            className={`${classes.rankBox}`}
            classes={{expanded: classes.panelRoot}}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                classes={{
                    root: classes.summaryRoot,
                    content: classes.summaryContent,
                    expanded: classes.summaryExpanded,
                    expandIcon: classes.summaryExpandedButton,
                }}
            >
                <Typography className={classes.heading}>
                    <StarIcon className={classes.starIcon} />즐겨찾기 목록
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                classes={{root: classes.detailRoot}}
            >
                {/* 이거 정렬 어떻게 하지? */}
                <div className={classes.detailParagraph} ref={boxReference}>

                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default BookmarkList;