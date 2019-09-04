import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    '@global': {
        html: {
            width: '100%',
            minHeight: '100%',
        },
        body: {
            width: '100%',
            minHeight: '100%',
        },
        '#root': {
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
        },
    },
    outerContainer: {
        boxSizing: 'border-box',
        minHeight: '100vh',
    },
    innerContainer: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&>div': {
            paddingTop: theme.spacing(3),
        },
    },
    greenBox: {
        //background: 'linear-gradient(to right top, rgb(255, 128, 8), #dee2e6)',
        //backgroundColor: '#ff922b',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-99',
    },
    // redBox: {
    //     backgroundColor: '#dee2e6',
    //     position: 'absolute',
    //     top: '0',
    //     right: '0',
    //     width: '50%',
    //     height: '100%',
    //     zIndex: '-99',
    // },
    button: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    form: {
        marginBottom: theme.spacing(5),
    },
    lastInput: {
        marginBottom: theme.spacing(3),
    },
    loginHeading: {
        marginBottom: theme.spacing(1),
        color: '#212529',
    },
    navLink: {
        textDecoration: 'none',
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.outerContainer}>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.innerContainer}>
                <div>
                    <Typography className={classes.loginHeading} align="center" component="h4" variant="h4">
                        호불호
                    </Typography>
                    <Typography className={classes.loginHeading} align="center" component="h6" variant="subtitle1">
                        로그인
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            id="login-id"
                            label="아이디"
                            className={classes.textField}
                            placeholder="아이디"
                            margin="normal"
                        /> <br/>
                        <TextField
                            id="login-password"
                            label="비밀번호"
                            className={classes.lastInput}
                            type="password"
                            placeholder=""
                            margin="normal"
                        /><br/>

                        <NavLink to="/home" className={classes.navLink}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                로그인
                            </Button>
                        </NavLink>
                        <NavLink to="/home" className={classes.navLink}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                회원가입
                            </Button>
                        </NavLink>
                    </form>

                    <Button variant="contained" color="secondary" className={classes.button}>
                        <FontAwesomeIcon className={classes.icon} icon={faGooglePlus} /> 구글로 로그인
                    </Button> <br/>
                    <Button variant="contained" color="primary" className={classes.button}>
                        <FontAwesomeIcon className={classes.icon} icon={faFacebook} /> 페이스북으로 로그인
                    </Button> <br/>
                </div>
            </Container>
            <div className={classes.greenBox}>
            </div>
            <div className={classes.redBox}>
            </div>
        </div>
    );
};

export default LoginPage;