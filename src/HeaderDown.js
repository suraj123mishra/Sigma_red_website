import React, { Component } from 'react'
import './HeaderDown.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './HeaderDown.css';
import Graph from './graph';

// import images4 from './images/i4.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'AI 1',
    imgPath:
      "https://cdn.pixabay.com/photo/2020/02/22/08/39/web-4869856__340.jpg",
    
      
  },
  {
    label: 'AI 2',
    imgPath:'https://cdn.pixabay.com/photo/2019/12/23/22/52/artificial-intelligence-4715585__340.jpg',
  },
  {
    label: 'AI 3',
    imgPath:"https://cdn.pixabay.com/photo/2020/05/07/18/25/tech-5142625__340.jpg",
  },
  {
    label: 'AI 4',
    imgPath:'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507__340.jpg'
      
  },
  {
    label: 'AI 5',
    imgPath:'https://cdn.pixabay.com/photo/2019/04/30/12/34/smart-4168483__340.jpg',
  },
  {
    label: 'AI 6',
    imgPath:'https://cdn.pixabay.com/photo/2020/05/21/21/28/ai-5202865__340.jpg',
  },
  {
    label: 'AI 7',
    imgPath:
      'https://cdn.pixabay.com/photo/2020/02/19/07/48/web-4861605_1280.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 620,
      marginLeft:40,
      backgroundColor:'#eeeeee',
    },
    media: {
      height: 0,
      paddingTop: '44.25%', // 16:9
      
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div 
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        
      >
        {value === index && (
          <Box p={3} >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
 
  
  
 
  

  export default function RecipeReviewCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  
  

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
    return (
       

     
    <div class="background_animation">      
      
      <div className="card_class">
        <CardHeader
        
        className="header_from_text"
          title="AI Risk Assessment & Remediation "
         
        />
        
        {/* <AutoPlaySwipeableViews
        interval={1200}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
        
      >
        {tutorialSteps.map((step, index) => (
        <div >
          {Math.abs(activeStep - index) <= 2 ? (
        <CardMedia
          className={classes.media}
          image={step.imgPath}
          title="Paella dish"
          
        >
        </CardMedia>
        ) : null}
        </div>
        ))}
         </AutoPlaySwipeableViews> */}
        <Card class="graph_card_layout">
        <Graph/>
        </Card>

        <CardContent  className="header_from_text card_layout_second">
          <Typography   component="p" className="card_text_layout">
          We enable AI safety, by making AI more secure, compliant, unbiased, and transparent. Our patent pending Merit AI risk assessment and remediation platform analyzes our clients' AI landscape across multiple pillars and provide AI risk scores, risk analytics & scoring, and remediation.
          </Typography>
        </CardContent>
        
        
      </div>
    
    </div>
      
     
      

      
      
      
     
     
    );
  }
