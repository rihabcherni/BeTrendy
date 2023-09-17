import React from 'react'
import './Footer.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StyledBtnFab } from './StyledFooter';
import { Box, Typography, Grid, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../../../logo.PNG'
import TelegramIcon from '@mui/icons-material/Telegram';
import SocialMedia from '../SocialMedia/SocialMedia';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
export default function Footer() {
  return (
    <Box component="footer" className="footer">
        <Grid container className="footer-container">
          <Grid item xs={12} lg={3} sm={6}>
            <Box>
              <Grid container spacing={0} alignItems="center" >
                <Grid item xs={3} lg={3} sm={3}>
                  <img src={logo} alt="BeTrendy logo" className="logoFooter" style={{ width:"60px" }}/>
                </Grid>
                <Grid item xs={9} lg={9} sm={9}>
                  <Typography variant="h6" color="text.primary" sx={{ fontFamily:"'Lobster', cursive" }}>BeTrendy</Typography>
                </Grid>
              </Grid>
              <Typography variant='paragraph'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <Typography variant="h6">
              Contact Us
            </Typography>
            <Grid container spacing={4} alignItems="center" sx={{ paddingTop:"1rem" }}>
              <Grid item lg={1} xs={1}><LocationOnIcon/> </Grid>
              <Grid item lg={10} xs={10}> 
                <Typography variant="body1" color="text.secondary" sx={{ fontWeight:"bold" }}>
                  Location:
                </Typography> 
                <Typography variant="body2" color="text.secondary">
                LES BERGES DU LAC II WALKWAY, TUNIS
                </Typography> 
              </Grid>        
            </Grid>
            <Grid container spacing={4} alignItems="center"  sx={{paddingTop:"1rem"}}>
              <Grid item lg={1} xs={1}><EmailIcon/> </Grid>
              <Grid item lg={10} xs={10}> 
                <Typography variant="body1" color="text.secondary" sx={{ fontWeight:"bold" }}>
                  Email:
                </Typography> 
                <Typography variant="body2" color="text.secondary">
                  contact@betrendy.com
                </Typography>
              </Grid>        
            </Grid>
            <Grid container spacing={4} alignItems="center"  sx={{paddingTop:"1rem"}}>
              <Grid item lg={1} xs={1}><PhoneIcon/> </Grid>
              <Grid item lg={10} xs={10}> 
              <Typography variant="body1" color="text.secondary" sx={{ fontWeight:"bold" }}>
                  Phone:
                </Typography> 
                <Typography variant="body2" color="text.secondary">
                  +216 99 366 309
                </Typography> 
              </Grid>        
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
              <Typography variant="h6">Usefull Link</Typography>
              <Grid container spacing={4}>
                <Grid item xs={6} lg={5} sm={6} sx={{ display: "flex", flexDirection: "column", marginTop:2 }}>
                  <Link to="/be-trendy">Home</Link>
                  <Link to="/be-trendy/products">Products</Link>
                  <Link to="/be-trendy/faq">FAQ</Link>
                  <Link to="/be-trendy/about-us">About us</Link>
                  <Link to="/be-trendy/blog">Blog</Link>
                  <Link to="/be-trendy/contact-us">Contact us</Link>
                </Grid>
                <Grid item xs={6} lg={7} sm={6} sx={{ display: "flex", flexDirection: "column", marginTop:2  }}>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/refund-policy">Refund Policy</Link>
                  <Link to="/shipping-policy">Shipping Policy</Link>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <Box className='newsletter'>
              <Typography variant="h6" sx={{ paddingBottom:"15px" }}>Subscribe To Our Newsletter</Typography>
              <Typography variant="paragraph">Don't miss to subscribe to our new feeds, kindly fill the form below.</Typography>
              <br/>
              <Box className="sub-container">
                <input type="email" name="subscribeNews" id="subscribeNews" placeholder="Email Address" />
                <Button className="sub-button" aria-label="sumbit-sub"><TelegramIcon/></Button>
              </Box>
            </Box>
            <SocialMedia/>
          </Grid>
        </Grid>
        <Box className="footerCopyRight">
          <Typography variant="body2" color="text.secondary" align="center">
            © Copyright BeTrendy. All Rights Reserved  {" "}
            {new Date().getFullYear()}
            {". "}
          </Typography>
          <a href="#" className='btn-top'>
            <StyledBtnFab size="small" aria-label="add">
               <KeyboardArrowUpIcon /> 
               </StyledBtnFab>
            </a>
        </Box>
    </Box>
  );
}