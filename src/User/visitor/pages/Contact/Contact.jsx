import React, {useState} from 'react'
import './Contact.scss'
import img from '../../assets/marker-icon.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Title from '../../Componenets/Title/Title';
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SubjectIcon from '@mui/icons-material/Subject';
import FaxIcon from '@mui/icons-material/Fax';
import { Box, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import SocialMedia from '../../Componenets/SocialMedia/SocialMedia';
export default function Contact() {
  const containerStyle = {
    width: '100%',
    height: '42vh'
  };
  const icon = L.icon({ iconUrl: img });
  const [contactInput, setcontactInput] = useState({name: '', email: '', phone: '', message: '', error_list:[],});
const handleInput =  (e) => {
    e.persist();
    setcontactInput({ ...contactInput, [e.target.name]: e.target.value });
};
const contactSubmit = (e) => {

};
  return (
    <>
        <Title title='Contact us' souTitle='Welcome to the Contact Us page of BeTrendy!'/>
        <MapContainer center={[36.83642766104828, 10.228816677047252]} zoom={13} style={containerStyle} locale="en">
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
            />
              <Marker position={[36.83642766104828, 10.228816677047252]} icon={icon}>
                <Popup>
                Les Berges du Lac II, Walkway, Tunis
                </Popup>
              </Marker>
        </MapContainer>
        <Grid container spacing={4} sx={{ px:15 , py: 2}}  direction="row"  alignItems="center" justifyContent="center">
            <Grid item lg={6} sm={6} xs={12}>
            <Typography variant='h5'>Contact us</Typography>
              <Grid container alignItems="center" sx={{ mt:2 }}>
                <Grid item sx={{ mr: 1 }}>
                  <LocationOnIcon />
                </Grid>
                <Grid item>
                  <Typography variant='h6'>Localisation:</Typography>
                </Grid>
                <Grid item lg={12} sm={12} xs={12} >
                  <Typography variant='body2'>Les Berges du Lac II, Walkway, Tunis</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" sx={{ mt:2 }}>
                <Grid item sx={{ mr: 1 }}>
                  <EmailIcon />
                </Grid>
                <Grid item>
                  <Typography variant='h6'>Email:</Typography>
                </Grid>
                <Grid item lg={12} sm={12} xs={12} >
                  <Typography variant='body2'>contact.betrendy@gmail.tn</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" sx={{ mt:2 }}>
                <Grid item sx={{ mr: 1 }}>
                  <PhoneIcon />
                </Grid>
                <Grid item>
                  <Typography variant='h6'>Phone:</Typography>
                </Grid>
                <Grid item lg={12} sm={12} xs={12} >
                  <Typography variant='body2'>+216 99366309</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" sx={{ mt:2 }}>
                <Grid item sx={{ mr: 1 }}>
                  <FaxIcon />
                </Grid>
                <Grid item>
                  <Typography variant='h6'>Fax:</Typography>
                </Grid>
                <Grid item lg={12} sm={12} xs={12} >
                  <Typography variant='body2'>+216 99366309</Typography>
                </Grid>
              </Grid>
              <SocialMedia/>
            </Grid>
            <Grid item lg={6} sm={6} xs={12} >
              <Typography variant='h5'>Get in touch with us</Typography>
              <Box onSubmit={contactSubmit} component="form" sx={{ mt:2 }}>
                <FormControl variant="outlined" color="primary" fullWidth>
                  <InputLabel htmlFor="name" >Name</InputLabel>
                  <OutlinedInput id="name" type='text' name="name" value={contactInput.name}
                  onChange={handleInput} placeholder='Enter your name'
                  startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                  error={!!contactInput.error_list.name}  label="Name" 
                />
                  <FormHelperText error={true}>
                    {contactInput.error_list.name}           
                  </FormHelperText> 
                </FormControl>

                <FormControl variant="outlined" color="primary" fullWidth sx={{ mt:1 }}>
                  <InputLabel htmlFor="email" >Email</InputLabel>
                  <OutlinedInput id="email" type='text' name="email" value={contactInput.email}
                  onChange={handleInput} placeholder='Enter your email'
                  startAdornment={<InputAdornment position="start"><EmailIcon/></InputAdornment> }  
                  error={!!contactInput.error_list.email}  label="Email" 
                />
                  <FormHelperText error={true}>
                    {contactInput.error_list.email}           
                  </FormHelperText> 
                </FormControl>

                <FormControl variant="outlined" color="primary" fullWidth sx={{ mt:1 }}>
                  <InputLabel htmlFor="phone" >Subject</InputLabel>
                  <OutlinedInput id="subject" type='text' name="Subject" value={contactInput.subject}
                  onChange={handleInput} placeholder='Enter your subject'
                  startAdornment={<InputAdornment position="start"><SubjectIcon/></InputAdornment> }  
                  error={!!contactInput.error_list.subject} label="Subject" 
                />
                  <FormHelperText error={true}>
                    {contactInput.error_list.subject}           
                  </FormHelperText> 
                </FormControl>

                <FormControl variant="outlined" color="primary" fullWidth sx={{ mt:1 }}>
                  <InputLabel htmlFor="message" >Message</InputLabel>
                  <OutlinedInput id="message" type='text' name="message" value={contactInput.message}
                  onChange={handleInput} placeholder='Enter your message'
                  error={!!contactInput.error_list.message}  label="Message" multiline rows={4}
                />
                  <FormHelperText error={true}>
                    {contactInput.error_list.message}           
                  </FormHelperText> 
                </FormControl>     
              </Box>
            </Grid>
        </Grid>    
    </>
  )
}
