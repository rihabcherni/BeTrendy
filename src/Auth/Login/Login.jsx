import React, { useState } from "react";
import './Login.scss'
import axios from "axios";
import Swal from "sweetalert"
import { Grid, Typography, FormHelperText, InputLabel, OutlinedInput, InputAdornment, IconButton, Box, Divider } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import {ButtonAuth, TextAuth, InputAuth, MediaAuthBtn, AvatarAuth, TitleAuth,ContainerAuth} from '../StyledCompAuth'

axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    showPassword: false,
    error_list: [],
  });
  const handleInput = (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
      const response = await axios.post("http://127.0.0.1:8000/api/login", data);
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
      setLoginInput({ ...loginInput, error_list: response.data.validation_errors });
    }
  };
  const handleClickShowPassword = () => {
    setLoginInput({
      ...loginInput,
      showPassword: !loginInput.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (  
    <ContainerAuth>
        <Grid align='center'>
          <AvatarAuth><LockOutlinedIcon/></AvatarAuth>
          <TitleAuth variant="h5">Welcome back</TitleAuth>
        </Grid>
        <Box onSubmit={loginSubmit} component="form">
          <InputAuth variant="outlined" color="primary">
              <InputLabel htmlFor="Email" >Email</InputLabel>
              <OutlinedInput id="email" type='email' name="email" value={loginInput.email}
              onChange={handleInput} placeholder='Email Address'
              startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
              error={!!loginInput.error_list.email}  label="Email" 
            />
              <FormHelperText error={true}>
              {loginInput.error_list.email}           
            </FormHelperText> 
          </InputAuth>

          <InputAuth sx={{ marginTop: 2 }} variant="outlined" color="primary" >
            <InputLabel htmlFor="password" >Password</InputLabel>
            <OutlinedInput 
              id="password"
              type={loginInput.showPassword ? 'text' : 'password'}
              value={loginInput.password}
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
                    onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}
                    edge="end" >
                      {loginInput.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              error={!!loginInput.error_list.password}
      
              label="password" /> 
              <FormHelperText error={true}>
              {loginInput.error_list.password}           
            </FormHelperText> 
          </InputAuth>
          <ButtonAuth aria-label="sumbit-login" type='submit' variant="contained"> Login </ButtonAuth>   
            <Typography sx={{textAlign:"center"}}>
              <Link style={{color:"blue"}} to="/forgot-password" > Forgot password</Link>
            </Typography>
            <Divider variant="middle" sx={{ color:"var(--dusty-gray)" }}>or</Divider>
            <MediaAuthBtn variant="outlined" startIcon={<GoogleIcon /> } sx={{backgroundColor:"var(--google-btn)"}}>Sign in with Google</MediaAuthBtn>             
            <MediaAuthBtn variant="outlined" startIcon={<FacebookIcon />} sx={{backgroundColor:"var(--facebook-btn)"}}>Sign in with Facebook</MediaAuthBtn>  
            <MediaAuthBtn variant="outlined" startIcon={<AppleIcon />} sx={{backgroundColor:"var(--apple-btn)"}}>Sign in with Appel</MediaAuthBtn>  
            <TextAuth>Don't have an  account? <Link to="/sign-up" style={{ color:"blue" }}>Sign up</Link></TextAuth>              
        </Box>
    </ContainerAuth>  
  )
}
export default Login;