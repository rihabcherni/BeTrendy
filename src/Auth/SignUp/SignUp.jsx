import React, { useState } from "react";
import './SignUp.scss'
import axios from "axios";
import Swal from "sweetalert"
import { Grid, Box,FormHelperText, InputLabel, OutlinedInput, InputAdornment, IconButton, Divider } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {ButtonAuth, TextAuth, InputAuth, InputAuth2, MediaAuthBtn, AvatarAuth, TitleAuth,ContainerAuth} from '../StyledCompAuth'
import { useTheme } from "@mui/system";

axios.defaults.withCredentials = true;

const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [signUpInput, setsignUpInput] = useState({
    email: "",
    password: "",
    showPassword: false,
    error_list: [],
  });
  const handleInput = (e) => {
    e.persist();
    setsignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
  };
  const signUpSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: signUpInput.email,
      password: signUpInput.password,
    };
      const response = await axios.post("http://127.0.0.1:8000/api/signUp", data);
      if(response.data.token!==undefined){
        var role = response.data.Role;
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem('Role',role);
        localStorage.setItem('profile', JSON.stringify(response.data.details));
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        axios.defaults.headers.common["Content-Type"] = `application/json`;
        window.location.reload();  
        navigate("/"+role);
        Swal('Success',response.data.message,"success");
      }else{
      setsignUpInput({ ...signUpInput, error_list: response.data.validation_errors });
    }
  };
  const handleClickShowPassword = () => {
    setsignUpInput({
      ...signUpInput,
      showPassword: !signUpInput.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (  
    <ContainerAuth>
      <Grid align='center'>
        <AvatarAuth><LockOutlinedIcon/></AvatarAuth>
        <TitleAuth variant="h5">Welcome</TitleAuth>
      </Grid>
      <Box onSubmit={signUpSubmit} component="form">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputAuth2 variant="outlined" color="primary">
                <InputLabel htmlFor="firstName" >FirstName</InputLabel>
                <OutlinedInput id="firstName" type='text' name="firstName" value={signUpInput.firstName}
                onChange={handleInput} placeholder='firstName'
                startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                error={!!signUpInput.error_list.firstName}  label="FirstName" 
              />
                <FormHelperText error={true}>
                {signUpInput.error_list.firstName}           
              </FormHelperText> 
            </InputAuth2>
          </Grid>
          <Grid item xs={6}>
            <InputAuth2 variant="outlined" color="primary">
                <InputLabel htmlFor="lastName" >LastName</InputLabel>
                <OutlinedInput id="lastName" type='text' name="lastName" value={signUpInput.lastName}
                onChange={handleInput} placeholder='lastName'
                startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                error={!!signUpInput.error_list.lastName}  label="LastName" 
              />
                <FormHelperText error={true}>
                {signUpInput.error_list.lastName}           
              </FormHelperText> 
            </InputAuth2>
          </Grid>
        </Grid>
        
        <InputAuth sx={{ marginTop: 1 }} variant="outlined" color="primary">
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <OutlinedInput id="phone" type='text' name="phone" value={signUpInput.phone}
            onChange={handleInput} placeholder='phone'
            startAdornment={<InputAdornment position="start"><PhoneIcon/></InputAdornment> }  
            error={!!signUpInput.error_list.phone}  label="Phone" 
          />
            <FormHelperText error={true}>
            {signUpInput.error_list.phone}           
          </FormHelperText> 
        </InputAuth>

        <InputAuth sx={{ marginTop: 1 }} variant="outlined" color="primary">
            <InputLabel htmlFor="Email" >Email</InputLabel>
            <OutlinedInput id="email" type='email' name="email" value={signUpInput.email}
            onChange={handleInput} placeholder='Email Address'
            startAdornment={<InputAdornment position="start"><EmailIcon/></InputAdornment> }  
            error={!!signUpInput.error_list.email}  label="Email" 
          />
            <FormHelperText error={true}>
            {signUpInput.error_list.email}           
          </FormHelperText> 
        </InputAuth>

        <InputAuth sx={{ marginTop: 1 }} variant="outlined" color="primary" >
          <InputLabel htmlFor="password" >Password</InputLabel>
          <OutlinedInput 
            id="password"
            type={signUpInput.showPassword ? 'text' : 'password'}
            value={signUpInput.password}
            name="password"
            onChange={handleInput}
            placeholder='password'
            startAdornment={
              <InputAdornment position="start">
                <LockIcon/>
              </InputAdornment>
            }
            endAdornment={<InputAdornment position="end">
                <IconButton aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end" >
      {signUpInput.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            error={!!signUpInput.error_list.password}
      
            label="password" /> 
            <FormHelperText error={true}>
            {signUpInput.error_list.password}           
          </FormHelperText> 
        </InputAuth>
          <ButtonAuth  aria-label="sumbit-signup" type='submit' variant="contained"> sign up </ButtonAuth>   
          <Divider variant="middle" sx={{ color:"var(--dusty-gray)" }}>or</Divider>

          <MediaAuthBtn variant="outlined" startIcon={<GoogleIcon /> } sx={{backgroundColor:"var(--google-btn)"}}>Sign up with Google</MediaAuthBtn>             
          <MediaAuthBtn variant="outlined" startIcon={<FacebookIcon />} sx={{backgroundColor:"var(--facebook-btn)"}}>Sign up with Facebook</MediaAuthBtn>  
          <MediaAuthBtn variant="outlined" startIcon={<AppleIcon />} sx={{backgroundColor:"var(--apple-btn)"}}>Sign up with Appel</MediaAuthBtn>  
          <TextAuth>Already have an account? <Link to="/be-trendy/login"  style={{ color:"blue" }}>Sign in</Link></TextAuth>         
      </Box>
    </ContainerAuth>  
    )
}
export default SignUp;