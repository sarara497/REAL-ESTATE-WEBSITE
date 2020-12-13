import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './sharedComp.css'

import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import image from '../../../src/photo/for_Card.jpg'
const useStyles = makeStyles({
   
    media: {
        height: 320,
  

    },
    type:{   
        marginBottom:30,  
        textAlign:'center',
        fontSize:30,
        fontWeight:700,
        color:'#f6f9f2',
        backgroundColor: '#362b52',
        borderRadius:16 ,
        justifyContent:'center',
       
    },
    loc:{
        marginBottom:30,  
        textAlign:'center',
        fontSize:30,
        fontWeight:700,
        color:'#f6f9f2',
        backgroundColor: '#362b52',
        borderRadius:16 ,
        justifyContent:'center',
    },
    sa_re:{
        marginBottom:30,  
        textAlign:'center',
        fontSize:30,
        fontWeight:700,
        color:'#f6f9f2',
        backgroundColor: '#362b52',
        borderRadius:16 ,
        justifyContent:'center',
    }
    ,
    butt:{
        marginBottom:30,  
        textAlign:'center',
        fontSize:30,
        fontWeight:700,
        color:'#f6f9f2',
        backgroundColor: '#362b52',
        borderRadius:16 ,
        justifyContent:'center',
    }
    ,
   

});


const MediaCard = ({real_type, location, is_sale , is_rent }) => { 
    console.log("iam in card")
    const classes = useStyles();
    return (
        <span id="rootDiv">
            <Card   id="ccard" >
                <CardActionArea>
                    <CardMedia
                    id="cardd"
                        className={classes.media}
                        image={image} />
                    <CardContent>
                        <Typography id="textt"  className={classes.type} gutterBottom >
                           { real_type}
                       </Typography>
                        <Typography  className={classes.loc} variant="body2" color="textSecondary" component="p">
                           {location}
                       </Typography>
                       <Typography  className={classes.sa_re} variant="body2" color="textSecondary" component="p">
                       {
                    is_sale ?
                    "Sale"
                     
                        :
                       "Rent"
                }
                       </Typography>
                       <Button href="/"   className={classes.butt}  variant="contained" color="primary">
                             More..
                        </Button>
                    </CardContent>
    
                </CardActionArea>
            </Card>
        </span>
    );
}

export default MediaCard