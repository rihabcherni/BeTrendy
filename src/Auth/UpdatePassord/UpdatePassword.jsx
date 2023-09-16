import React, { useState } from "react";
import './UpdatePassword.scss'
import axios from "axios";
import Swal from "sweetalert"
import { Button, Typography, FormControl, FormHelperText, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
axios.defaults.withCredentials = true;

const UpdatePassword = () => {
  const titleStyle={ color:'rgb(255, 106, 0)',  margin:'30px 0 50px',fontSize:'25px',fontWeight:'bold', textAlign:'center'}
  const inputStyle ={width:"90%" , margin:"2% 5%", textTransform: "capitalize" }
  const btnstyle = { backgroundColor: "rgb(255, 106, 0)",width:"90%" , margin:"5% 5%", padding:"5px", fontSize:"14px", textTransform:"capitalize", fontWeight:"bold"};

  const initial= {currentPassword: "", newPassword:"", confirmPassword:"" ,showCurrentPassword:false,showNewPassword:false, showConfirmPassword:false,error_list:[], }
  const [updatePassword, setupdatePassword] = useState(initial);
  const handleInput =  (e) => {
    e.persist();
    setupdatePassword({ ...updatePassword, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
      e.preventDefault();
      const data = {
          currentPassword: updatePassword.currentPassword,
          newPassword: updatePassword.newPassword,
          confirmPassword: updatePassword.confirmPassword,
      }
      var requestOptions = {  method: 'POST',
       headers: {'content-type': "application/json"}, 
      body: JSON.stringify(data) };
      fetch(`${process.env.REACT_APP_API_KEY}/api/oublier-password-update`, requestOptions)
        .then(response => response.json()).then(res =>     { 
            if(res.status === 200 ){
              Swal('primary',res.message,"primary");
              setupdatePassword({...updatePassword,error_list:[]});
              setupdatePassword({ ...updatePassword, currentPassword:"",newPassword:"", confirmPassword:"" });
            }else if( res.status === 404){
              setupdatePassword({...updatePassword,error_list:res.validation_errors});
            }
          }).catch(error => console.log('error', error)); 
  };

  const handleClickShowcurrentPassword = () => { setupdatePassword({...updatePassword, showCurrentPassword: !updatePassword.showCurrentPassword});};
  const handleClickShowNewPassword = () => {setupdatePassword({...updatePassword, showNewPassword: !updatePassword.showNewPassword});};
  const handleClickShowConfirmPassword = () => { setupdatePassword({...updatePassword, showConfirmPassword: !updatePassword.showConfirmPassword}); };

  const handleMouseDownCurrentPassword = (event) => {event.preventDefault();}; 
  const handleMouseDownNewPassword = (event) => {event.preventDefault();}; 
  const handleMouseDownConfirmPassword = (event) => {event.preventDefault();}; 

  
    return (  
      <div className="update-password-page">  
          <Typography variant='h5' style={titleStyle} >Change Password?</Typography>  
          <form onSubmit={handleFormSubmit}>
              <FormControl fullWidth variant="outlined"  style={inputStyle}>
                  <InputLabel htmlFor="currentPassword" >current Password</InputLabel>
                  <OutlinedInput id="currentPassword"
                      type={updatePassword.showCurrentPassword ? 'text' : 'password'} value={updatePassword.currentPassword}
                      name="currentPassword" onChange={handleInput}
                      startAdornment={ <InputAdornment position="start">  <LockIcon/> </InputAdornment>}
                      endAdornment={
                          <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility"
                            onClick={handleClickShowcurrentPassword} onMouseDown={handleMouseDownCurrentPassword} edge="end" >
                            {updatePassword.showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                          </InputAdornment>
                      }
                      error={!!updatePassword.error_list.currentPassword} label="current Password" 
                  /> 
                  <FormHelperText error={true}>
                      {updatePassword.error_list.newPassword}           
                  </FormHelperText>     
              </FormControl>
              
              <FormControl fullWidth variant="outlined" style={inputStyle}>
                  <InputLabel htmlFor="newPassword" >new password</InputLabel>
                  <OutlinedInput id="newPassword" type={updatePassword.showNewPassword ? 'text' : 'password'}
                      value={updatePassword.newPassword} name="newPassword" onChange={handleInput}
                      startAdornment={<InputAdornment position="start"> <LockIcon/> </InputAdornment> }
                      endAdornment={
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowNewPassword} onMouseDown={handleMouseDownNewPassword} edge="end" >
                                {updatePassword.showNewPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment> }
                      error={!!updatePassword.error_list.newPassword} label="new password" 
                  /> 
                  <FormHelperText error={true}>
                      {updatePassword.error_list.newPassword}           
                  </FormHelperText>     
              </FormControl>

              <FormControl fullWidth variant="outlined"style={inputStyle}>
                  <InputLabel htmlFor="confirmPassword" >Confirm Password</InputLabel>
                  <OutlinedInput id="confirmPassword"
                      type={updatePassword.showConfirmPassword ? 'text' : 'password'} value={updatePassword.confirmPassword}
                      name="confirmPassword" onChange={handleInput}
                      startAdornment={  <InputAdornment position="start"> <LockIcon/>  </InputAdornment> }
                      endAdornment={
                          <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownConfirmPassword}edge="end" >
                              {updatePassword.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                          </InputAdornment>
                      }
                      error={!!updatePassword.error_list.confirmPassword}

                      label="Confirm Password" 
                  /> 
                  <FormHelperText error={true}>
                      {updatePassword.error_list.confirmPassword}           
                  </FormHelperText>     
              </FormControl>
              <br/>
              <Button  aria-label="sumbit-update-pass" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Update Password</Button>
          </form>
      </div>
    )
}
export default UpdatePassword;
