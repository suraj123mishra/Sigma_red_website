import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Line from './Line'
import Radial from './radial'
import Mix from './Mixes'
import Circle from './circle'
import Bar from './Bar'
import Bar2 from './doubleBar'
import Bar3 from './bar3'
import VBar from './doublevertical'



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
     
    },
    
      
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   
    
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
     
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      
    },
  }));
  

function Graph() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="md" >
            <CssBaseline />
<Carousel className={classes.paper} >
  <Carousel.Item interval={500}>
    <Line/>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <Bar/>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <Mix/>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <Circle/>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <Radial/>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <Bar2/>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <Bar3/>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <VBar/>
  </Carousel.Item>

  

</Carousel>
</Container>
        )
    }
    
    
export default Graph;
    