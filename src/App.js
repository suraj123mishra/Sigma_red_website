import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Header from './Header';
import Login from './Login';
import { useStateValue } from './StateProvider';
import HeaderDown from './HeaderDown';
import Side from './sideBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import About from './about.js'
import Use from './usecase.js'
import Graph from './graph.js'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header2 from './Header2'
import Privacy from './privacy'
import ScrolltoTop from './scrollUp';
function Copyright() {
	return (
    
	  <Typography variant="body2" color="textPrimary" align="center" >
		{' © Copyright '}
		
    {new Date().getFullYear()} SigmaRed™. All rights reserved.<Link to="/privacy" className="link_copyright" > Privacy policy	</Link>{' '}
	
		
	
	  </Typography>
   
	);
  }


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const[{user} , dispatch] =  useStateValue();
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} lg={6}>
          <HeaderDown/>

        </Grid>
        <Grid item xs={12} lg={6}>
          <Side/>
        </Grid>
        <Use/>
        <About/>
       
        <Login/>
        <Container maxWidth="md" component="main" className="copyright_position"> 
        <Box>
          <Copyright />
        </Box>
        </Container>
      </React.Fragment>

      
    );
  }

  
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/privacy">
              <ScrolltoTop/>
              <Header2/> 
              <Privacy/>   
          </Route>
          
          
          
          <Route path="/">
          <ScrolltoTop/>
              <Header/>
              <div className={classes.root} id="platform">
              <Grid container spacing={1} class="background_Class">
                 <Grid container item xs={12} spacing={3}>
                   <FormRow />
                  </Grid>
              </Grid>
              
              </div>
                      
          </Route>

          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
