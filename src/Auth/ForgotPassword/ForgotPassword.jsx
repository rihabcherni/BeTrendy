import React, { useState } from "react";
import './ForgotPassword.scss'
import axios from "axios";
import { Typography, FormControl, FormHelperText, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {StyledBtn, StyledLink} from "../../StyleComp"
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;
const ForgotPassword = () => {
    const initial= {email: "",error_list:[], }
    const [forgotPassword, setforgotPassword] = useState(initial);
    const handleInput =  (e) => {
        e.persist();
        setforgotPassword({ ...forgotPassword,[e.target.name]: e.target.value });
    };
    const handleFormSubmit = (e) => {
    };  
    
    const titleStyle={ color:'rgb(255, 106, 0)',  margin:'20px 0',fontSize:'25px',fontWeight:'bold'}
    const textStyle={ color:'rgb(148, 145, 145)',  margin:'20px 0',fontSize:'18px',fontWeight:'bold'}
    const inputStyle ={width:"90%" , margin:"2% 5%", textTransform: "capitalize" }
    const btnstyle = { backgroundColor: "rgb(255, 106, 0)",width:"90%" , margin:"5% 5%", padding:"5px", fontSize:"14px"};
    return (  
      <div className="forgot-password-page">  
          <Typography variant='h5' style={titleStyle} >Forgot Password?</Typography>  
          <Typography variant="p"  style={textStyle} >Enter yout email and we'll send a link to reset your password.</Typography>
          <br/>
          <form onSubmit={handleFormSubmit}>
              <FormControl fullWidth variant="outlined" color="primary" style={inputStyle}>
                  <InputLabel htmlFor="email" > Email *</InputLabel>
                  <OutlinedInput id="email" type='email' name="email" value={forgotPassword.email}
                      onChange={handleInput} placeholder='Enter your email'
                      startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                      error={!!forgotPassword.error_list.email}  label="Email" 
                  />
                  <FormHelperText error={true}>
                  {forgotPassword.error_list.email}           
                  </FormHelperText> 
              </FormControl>
              <br/>
              <StyledBtn type='submit' color='primary' variant="contained" style={btnstyle}>
                <StyledLink to='/reset-password'>
                    Reset my password
                </StyledLink>
              </StyledBtn>
          </form>
          <Typography sx={{textAlign:"center"}}>
              <Link to="/be-trendy/login">Back to login</Link>
          </Typography>  
      </div>
    )
}
export default ForgotPassword;
