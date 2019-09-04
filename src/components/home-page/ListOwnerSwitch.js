import React from 'react';
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

const ListOwnerSwitch = () => {
    return (
        <Typography component="div" style={{marginRight: '10px'}}>
            <Grid component="label" container alignItems="center" justify="flex-end">
                <Grid item>전체</Grid>
                <Grid item>
                    <Switch
                        //checked={state.checkedC}
                        //onChange={handleChange('checkedC')}
                        //value="checkedC"
                    />
                </Grid>
                <Grid item>친구</Grid>
            </Grid>
        </Typography>
    );
};

export default ListOwnerSwitch;