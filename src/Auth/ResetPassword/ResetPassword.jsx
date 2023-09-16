import React, { useState } from "react";
import './ResetPassword.scss'
import axios from "axios";
import Swal from "sweetalert"
import { Button, Typography, FormControl, FormHelperText, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
axios.defaults.withCredentials = true;

const ResetPassword = () => {
  const titleStyle={ color:'rgb(255, 106, 0)',  margin:'30px 0 50px',fontSize:'25px',fontWeight:'bold', textAlign:'center'}
  const inputStyle ={width:"90%" , margin:"2% 5%", textTransform: "capitalize" }
  const btnstyle = { backgroundColor: "rgb(255, 106, 0)",width:"90%" , margin:"5% 5%", padding:"5px", fontSize:"14px", textTransform:"capitalize", fontWeight:"bold"};

  const initial= {currentPassword: "", newPass:"", confirmPass:"" ,showCurrentPassword:false,shownewPass:false, showconfirmPass:false,error_list:[], }
  const [updatePassword, setupdatePassword] = useState(initial);
  const handleInput =  (e) => {
    e.persist();
    setupdatePassword({ ...updatePassword, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
      e.preventDefault();
      const data = {
          newPass: updatePassword.newPass,
          confirmPass: updatePassword.confirmPass,
      }
      var requestOptions = {  method: 'POST',
       headers: {'content-type': "application/json"}, 
      body: JSON.stringify(data) };
      fetch(`${process.env.REACT_APP_API_KEY}/api/oublier-password-update`, requestOptions)
        .then(response => response.json()).then(res =>     { 
            if(res.status === 200 ){
              Swal('primary',res.message,"primary");
              setupdatePassword({...updatePassword,error_list:[]});
              setupdatePassword({ ...updatePassword,newPass:"", confirmPass:"" });
            }else if( res.status === 404){
              setupdatePassword({...updatePassword,error_list:res.validation_errors});
            }
          }).catch(error => console.log('error', error)); 
  };

  const handleClickShownewPass = () => {setupdatePassword({...updatePassword, shownewPass: !updatePassword.shownewPass});};
  const handleClickShowconfirmPass = () => { setupdatePassword({...updatePassword, showconfirmPass: !updatePassword.showconfirmPass}); };

  const handleMouseDownnewPass = (event) => {event.preventDefault();}; 
  const handleMouseDownconfirmPass = (event) => {event.preventDefault();}; 

  
    return (  
      <div className="reset-password-page">  
          <Typography variant='h5' style={titleStyle} >Reset Password?</Typography>  
          <form onSubmit={handleFormSubmit}>              
              <FormControl fullWidth variant="outlined" style={inputStyle}>
                  <InputLabel htmlFor="newPass" >new password</InputLabel>
                  <OutlinedInput id="newPass" type={updatePassword.shownewPass ? 'text' : 'password'}
                      value={updatePassword.newPass} name="newPass" onChange={handleInput}
                      startAdornment={<InputAdornment position="start"> <LockIcon/> </InputAdornment> }
                      endAdornment={
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleClickShownewPass} onMouseDown={handleMouseDownnewPass} edge="end" >
                                {updatePassword.shownewPass ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment> }
                      error={!!updatePassword.error_list.newPass} label="new password" 
                  /> 
                  <FormHelperText error={true}>
                      {updatePassword.error_list.newPass}           
                  </FormHelperText>     
              </FormControl>

              <FormControl fullWidth variant="outlined"style={inputStyle}>
                  <InputLabel htmlFor="confirmPass" >Confirm Password</InputLabel>
                  <OutlinedInput id="confirmPass"
                      type={updatePassword.showconfirmPass ? 'text' : 'password'} value={updatePassword.confirmPass}
                      name="confirmPass" onChange={handleInput}
                      startAdornment={  <InputAdornment position="start"> <LockIcon/>  </InputAdornment> }
                      endAdornment={
                          <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility"
                              onClick={handleClickShowconfirmPass} onMouseDown={handleMouseDownconfirmPass}edge="end" >
                              {updatePassword.showconfirmPass ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                          </InputAdornment>
                      }
                      error={!!updatePassword.error_list.confirmPass} label="Confirm Password" 
                  /> 
                  <FormHelperText error={true}>
                      {updatePassword.error_list.confirmPass}           
                  </FormHelperText>     
              </FormControl>
              <br/>
              <Button  aria-label="sumbit-reset" type='submit' variant="contained" style={btnstyle} fullWidth>
                Reset Password
             </Button>
          </form>
      </div>
    )
}
export default ResetPassword;
