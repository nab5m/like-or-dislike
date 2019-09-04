import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Grid from "@material-ui/core/Grid";
import {KeyboardDatePicker} from "@material-ui/pickers";
import koLocale from "date-fns/locale/ko";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    '@global': {
        html: {
            width: '100%',
            height: '100%',
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
        marginBottom: theme.spacing(2),
    },
    formControl: {
        marginTop: theme.spacing(2),
    },
    lastInput: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
    },
    signUpHeading: {
        color: '#212529',
    },
}));



const SignUpPage = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className={classes.outerContainer}>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.innerContainer}>
                <div>
                    <Typography className={classes.signUpHeading} align="center" component="h4" variant="h4">
                        호불호
                    </Typography>
                    <Typography className={classes.signUpHeading} align="center" component="h6" variant="subtitle1">
                        회원가입
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            id="login-id"
                            label="아이디"
                            placeholder="아이디"
                            margin="normal"
                        /> <br/>
                        <TextField
                            id="login-password"
                            label="비밀번호"
                            type="password"
                            placeholder=""
                            margin="normal"
                        /><br/>
                        <TextField
                            id="login-password-check"
                            label="비밀번호 확인"
                            type="password"
                            placeholder=""
                            margin="normal"
                        /><br/>
                        <TextField
                            id="login-nickname"
                            label="닉네임"
                            placeholder="닉네임"
                            margin="normal"
                        /><br/>

                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="생년월일"
                                    format="yyyy-MM-dd"
                                    locale='ko'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">성별</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="여자" />
                                <FormControlLabel value="male" control={<Radio />} label="남자" />
                            </RadioGroup>
                        </FormControl> <br/>

                        <FormControl className={classes.lastInput}>
                            <InputLabel htmlFor="age-simple">지역</InputLabel>
                            <Select
                                value={10}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={10}>경기</MenuItem>
                                <MenuItem value={20}>서울</MenuItem>
                                <MenuItem value={30}>충청</MenuItem>
                            </Select>
                        </FormControl> <br/>

                        <Button variant="contained" color="secondary" className={classes.button}>
                            회원가입
                        </Button>
                    </form>
                </div>
            </Container>
            <div className={classes.greenBox}>
            </div>
            <div className={classes.redBox}>
            </div>
        </div>
    );
};

export default SignUpPage;