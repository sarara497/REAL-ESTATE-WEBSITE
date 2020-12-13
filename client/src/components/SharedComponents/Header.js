import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './sharedComp.css'
// import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../../src/photo/logo.png'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div id="nav" >
            <AppBar position="static">
                <Toolbar>

                    <img id="logo" src={logo} />

                    <div id="forNav">
                        <Button id="forbtnH" color="inherit">All&nbsp;</Button>
                        <Button id="forbtnH" color="inherit">Building&nbsp;</Button>
                        <Button id="forbtnH" color="inherit">Villas&nbsp;</Button>
                        <Button id="forbtnH" color="inherit">Apartments&nbsp;</Button>
                        <Button id="forbtnH" color="inherit">Stores&nbsp;</Button>
                        <Button id="forbtnH" color="inherit">Offices&nbsp;</Button>
                        <Button href="/Card" id="forbtnH" color="inherit">Lands&nbsp;</Button>

                    </div>
                    <div id="forNav">
                        <Button href="/AddReal_Estate" id="forAdd" color="inherit">Add Real-Estate&nbsp;</Button>
                        <Button href="/LogIn"  id="forLogin" color="inherit">LogIn&nbsp;</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
