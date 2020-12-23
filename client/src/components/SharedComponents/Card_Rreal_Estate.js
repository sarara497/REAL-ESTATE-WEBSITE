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
    }
});


const MediaCard = ({ _id , location, isFor , real_type ,imageUrl }) => { 
    console.log("iam in card" , real_type , 'for' , isFor )
    console.log("id" , _id)
    console.log("image" , imageUrl)
    const classes = useStyles();
  
   const  CardId=()=>{
    localStorage.setItem("CardId" , _id)
   } 

    return (
        <span id="rootDiv">
            <Card   id="ccard" >
                <CardActionArea>
                    <CardMedia
                    id="cardd"
                        className={classes.media}
                        image={imageUrl} />
                    <CardContent>
                        <Typography id="textforT"  className={classes.type} gutterBottom >
                           { real_type}
                       </Typography>
                        <Typography   id="textforL" className={classes.loc} variant="body2" color="textSecondary" component="p">
                           {location}
                       </Typography>
                       <Typography   id="textforis" className={classes.sa_re} variant="body2" color="textSecondary" component="p">
                       {isFor}
                       </Typography>
                       <Button href="/MoreInfo" onClick={CardId} id="textforB"  className={classes.butt}  variant="contained" color="primary">
                             More..
                        </Button>
                    </CardContent>
    
                </CardActionArea>
            </Card>
        </span>
    );
}

export default MediaCard