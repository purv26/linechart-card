import React from 'react';
import styles from './App.css';
import { Container, Grid, Button, Typography, Card, CardContent, CardActions, CardActionArea, CardMedia } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles=makeStyles((theme) => ({
  root:{
    width:"100vw",
    height:"100vh",
    backgroundColor:theme.palette.grey[200],
    paddingTop: theme.spacing(3),
  },
}));

function  App() {
  const classes=useStyles();

  return (
  <Container className={classes.root}>
    <Grid container spacing={5}>
      <Grid item sm={3}>
        <Card style={{backgroundColor: "#1437B6", color: "#FFF"}}>
          <CardContent>
            <Typography variant="h5">ORDERS</Typography>
            <Typography variant="subtitles"></Typography>
            <Typography variant="subtitles"></Typography>
          </CardContent>
          <CardActions>
            <Button endIcon={<ArrowForwardIcon />} style={{color: "#FFF"}}>Since Last month</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={3}>
        <Card style={{backgroundColor: "#1437B6", color: "#FFF"}}>
          <CardContent>
            <Typography variant="h5">REVENUE</Typography>
            <Typography variant="subtitles"></Typography>
          </CardContent>
          <CardActions>
            <Button endIcon={<ArrowForwardIcon />} style={{color: "#FFF"}}>Since Last month</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={3}>
        <Card style={{backgroundColor: "#1437B6", color: "#FFF"}}>
          <CardContent>
            <Typography variant="h5">AVERAGE PRICE</Typography>
            <Typography variant="subtitles"></Typography>
          </CardContent>
          <CardActions>
            <Button endIcon={<ArrowForwardIcon />} style={{color: "#FFF"}}>Since Last month</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={3}>
        <Card style={{backgroundColor: "#1437B6", color: "#FFF"}}>
          <CardContent>
            <Typography variant="h5">CAR WASH</Typography>
            <Typography variant="subtitles"></Typography>
          </CardContent>
          <CardActions>
            <Button endIcon={<ArrowForwardIcon />} style={{color: "#FFF"}}>Since Last month</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Container>);
}
export default App;