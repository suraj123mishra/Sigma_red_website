import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './usecase.css';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 2,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
   
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(20),
    marginTop: theme.spacing(0),
   
  },

}));

const tiers = [
  {
    title: 'Insurance claims processing',
    
    description: ['AI models used by Insurance underwriters need to be assessed for bias, transparency and security.',   ' This enables fair outcomes of claims processing by making AI unbiased, explainable and secured, thus enabling clients to meet regulatory compliance requirements and retain customer confidence through trust worthy AI.'],
    
  },
  {
    title: 'Loan underwriting',
    
   
    description: [
      'Lending process is not supposed to discriminate the applicants based on gender, ethnicity etc. Regulations as well as typical client policy directives demand so.',' When AI supports application review process, there is a risk of bias, lack of transparency resulting in unfair loan approvals. ',
      'Our solution, assesses AI algorithms and data sets and identify risks related to bias, transparency, security of AI and automatically remediate them as much as feasible, resulting in fair lending.'
    ],
    
  },
  {
    title: 'Ongoing rapid AI risk assessment and remediation',
   
    description: [
      'AI models and datasets are susceptible to risks including bias, lack of transparency and security attacks. ', 
      'Our platform enables ongoing and deeply technical and comprehensive risk assessment of AI landscape enabling business users, data scientists and other stakeholder to identify and remediate them in accelerated manner. '
    ],
    
  },
];


export default function Pricing() {
  const classes = useStyles();

  return (
     
    <React.Fragment >
      <CssBaseline />
      <Container className="container_text_2" id="usecases">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Use Cases
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Our comprehensive AI risk assessment and remediation platform creates business value across multiple use cases. Some of them are given below
        </Typography>
      </Container>
     
      <Container maxWidth="lg" component="main" className="container_text">
        <Grid container spacing={5}  >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card className="card_class_second">
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent className={classes.cardPricing}>
                  {/* <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div> */}
                  <div>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1"  key={line}>
                        {line}
                      </Typography>
                    ))}
                  </div>
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </React.Fragment>
   
  );
}