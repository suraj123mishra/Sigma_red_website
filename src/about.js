import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Polygon from 'react-polygon'
import './about.css';


const useStyles = makeStyles((theme) => ({
 
  heroContent_2: {
  marginTop:200,
  width:'100%',
	backgroundColor:'#222',
  
  
  },
  heroContent_3: {
    marginTop:20,
    width:'100%',
    marginBottom:20
    
    
    },
  heroButtons: {
	marginTop: theme.spacing(4),
	backgroundColor:'white',
	backgroundColor:'#222',
	
  },
  font_color:{
	  color:'white',
  },
 
}));



export default function Album() {
  const classes = useStyles();


  return (
  
    <React.Fragment >
      <CssBaseline />
      
      <main className={classes.heroContent_2} id="about">
        {/* Hero unit */}
        <div className={classes.heroContent_3}>
          <Container maxWidth="lg">
            <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom className={classes.font_color}>
              About Us
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.font_color}>
			Sigma<span id="text_color_sigma">RED</span> solves the problem of the lack of AI Safety. AI Adoption is happening in accelerated phase. However, most of the AI solutions are still susceptible to security attacks, bias, lack of transparency and non compliance. Our unique Merit AI platform identifies AI risks across security, bias, compliance and transparency and provide risk analytics and scoring, and automated remediation thus enabling proactive regulatory compliance.
            </Typography>
            
          </Container>
        </div>
        
      </main>
      {/* Footer */}
      
      {/* End footer */}
    </React.Fragment>
   
  );
}