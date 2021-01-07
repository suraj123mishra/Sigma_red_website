import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import './privacy.css';




const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
     
    },
    card_class:{
        marginTop:'100',
        paddingTop:'20',
        paddingLeft:'10',
        paddingRight:'10'
        
    },
      
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   
    
    },
    form: {
      width: '100%', 
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
            <Card className="card_class_privacy">
            <Typography variant="h4" component="h4" gutterBottom>
            Sigma<span id="text_color_sigma_sec">RED</span> Privacy Policy
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {'This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from sigmared.ai (the “Site”).'}
          
        </Typography>
        {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
        {/* </Card> */}

        <Typography variant="h4" component="h4" gutterBottom>
        PERSONAL INFORMATION WE COLLECT
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
        We collect Device Information using the following technologies:
        </Typography>
        <ul>
         
        <Typography variant="h6" component="h2" gutterBottom>
        - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
        </Typography>
          

         
        <Typography variant="h6" component="h2" gutterBottom>
        - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
        </Typography>
          

          
        <Typography variant="h6" component="h2" gutterBottom>
        - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
        </Typography>
       
        </ul>
        <Typography variant="h6" component="h2" gutterBottom>
        Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number.  We refer to this information as “Order Information.”
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
        When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
        </Typography>
        <Typography variant="h4" component="h4" gutterBottom>
        HOW DO WE USE YOUR PERSONAL INFORMATION?
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
        We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        Communicate with you;
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        Screen our orders for potential risk or fraud; and
When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.

        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
        </Typography>

        <Typography variant="h4" component="h4" gutterBottom>
        SHARING YOUR PERSONAL INFORMATION
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        We share your Personal Information with third parties to help us use your Personal Information, as described above.  We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here:  https://www.google.com/intl/en/policies/privacy/.  You can also opt-out of Google Analytics here:  https://tools.google.com/dlpage/gaoptout.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
        </Typography>

        <Typography variant="h4" component="h4" gutterBottom>
        DO NOT TRACK
        </Typography>


        <Typography variant="h6" component="h2" gutterBottom>
        Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
        </Typography>

        <Typography variant="h4" component="h4" gutterBottom>
        YOUR RIGHTS
        </Typography>


        <Typography variant="h6" component="h2" gutterBottom>
        If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
        </Typography>

        <Typography variant="h4" component="h4" gutterBottom>
        DATA RETENTION
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
        </Typography>

        <Typography variant="h4" component="h4" gutterBottom>
        CHANGES
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
        </Typography>


        <Typography variant="h4" component="h4" gutterBottom>
        CONTACT US
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@sigmared.ai 
        </Typography>

          </Card>

        </Container>
        )
    }
    
    
export default Graph;
    