import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ExpandMore from '@material-ui/icons/ExpandMore';

import LegendCard from '../components/LegendCard';
import ChartCard from '../components/ChartCard';

import legend44Img from '../components/assets/img/legend_art/44.png';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    },
    box: {
        marginTop: 20,
    }
}));

export default function LegendStats(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.box}>
                <Button variant="contained" color="secondary">
                    Legends
                    <ExpandMore />
                </Button>
            </Box>
            <Grid className={classes.box}>
                <LegendCard legendImg={legend44Img} />
                <ChartCard />
            </Grid>
        </div>
    );
}