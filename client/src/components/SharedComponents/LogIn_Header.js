import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './sharedComp.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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



export default function LogInButtonAppBar() {
    const classes = useStyles();

    return (
        <div id="nav" >
            <AppBar position="static">
                <Toolbar>

                    <img id="logo" src={logo} />

                    <div id="forNav1">
                    <Button  href='/' id="forbtnH" color="inherit">All&nbsp;</Button>
                        <Button href="/Building" id="forbtnH" color="inherit">Building&nbsp;</Button>
                        <Button href="/Houses" id="forbtnH" color="inherit">Houses&nbsp;</Button>
                        <Button href="/Villas" id="forbtnH" color="inherit">Villas&nbsp;</Button>
                        <Button  href="/Apartments" id="forbtnH" color="inherit">Apartments&nbsp;</Button>
                        <Button href="/Rooms" id="forbtnH" color="inherit">Rooms&nbsp;</Button>
                        <Button href="/Stores" id="forbtnH" color="inherit">Stores&nbsp;</Button>
                        <Button href="/Offices" id="forbtnH" color="inherit">Offices&nbsp;</Button>
                        <Button href="/Lands" id="forbtnH" color="inherit">Lands&nbsp;</Button>

                    </div>
                    <div id="forNav1">
                        <Button href="/AddReal_Estate" id="forAdd" color="inherit">Add Real-Estate&nbsp;</Button>
                        <Button
                            href="/"
                            id="forLogout"
                            onClick={() => {
                                localStorage.removeItem('isUser')    
                                localStorage.removeItem('isAdmin')
                                localStorage.removeItem('isOffice')
                                localStorage.removeItem('userId')
                                localStorage.removeItem('Token') 
                            }}
                            color="inherit">
                            LogOut&nbsp;
                                </Button>
                    </div>
                    <div id="forAcc">
                       <a id="acc" href="/Profile"> <AccountCircleIcon id="foricon"/></a>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
