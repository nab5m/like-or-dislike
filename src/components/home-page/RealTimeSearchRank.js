import React from 'react';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const useStyles = makeStyles((theme) => ({
    rankBox: {
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        boxShadow: 'none',
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.2em',
    },
    trendIcon: {
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
        minHeight: '30px !important',
    },
    summaryExpandedButton: {
        minHeight: '24px !important',
        padding: '0 12px',
    },
    detailRoot: {
        padding: '0.5em 1em',
        justifyContent: 'space-evenly',
    },
    rankNumber: {
        display: 'inline-flex',
        width: '20px',
        height: '20px',
        justifyContent: 'center',
        color: '#fd7e14',
        border: '1px solid #fd7e14',
        borderRadius: '10px',
    }
}));

const RealTimeSearchRank = () => {
    const classes = useStyles();

    return (
        <ExpansionPanel className={`${classes.rankBox}`}>
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
                    <TrendingUpIcon className={classes.trendIcon} />실시간 검색어
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                classes={{root: classes.detailRoot}}
            >
                {/*ToDo: set the text limit*/}
                <Typography>
                    <span className={classes.rankNumber}>1</span>
                    &nbsp;&nbsp;#동물 <br/>
                    <span className={classes.rankNumber}>2</span>
                    &nbsp;&nbsp;#취미 <br/>
                    <span className={classes.rankNumber}>3</span>
                    &nbsp;&nbsp;#예능 <br/>
                    <span className={classes.rankNumber}>4</span>
                    &nbsp;&nbsp;#남자아이돌 <br/>
                    <span className={classes.rankNumber}>5</span>
                    &nbsp;&nbsp;#여자아이돌 <br/>
                </Typography>
                <Typography>
                    <span className={classes.rankNumber}>6</span>
                    &nbsp;&nbsp;#롤챔피언 <br/>
                    <span className={classes.rankNumber}>7</span>
                    &nbsp;&nbsp;#드라마 <br/>
                    <span className={classes.rankNumber}>8</span>
                    &nbsp;&nbsp;#영화 <br/>
                    <span className={classes.rankNumber}>9</span>
                    &nbsp;&nbsp;#전공 <br/>
                    <span className={classes.rankNumber}>10</span>
                    &nbsp;&nbsp;#편의점 <br/>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default RealTimeSearchRank;