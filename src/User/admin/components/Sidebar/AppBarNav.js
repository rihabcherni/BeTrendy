import React , {useState , useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DarkLightBtn from "../../../../DarkLightBtn";
import {Menu, Avatar,Badge, MenuItem,  Box, AppBar, Fade, Typography} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link  ,useNavigate} from 'react-router-dom';
import Swal from "sweetalert";
import { styled } from '@mui/material/styles';
import HttpsIcon from '@mui/icons-material/Https';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.😎',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
export default function AppBarNav(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  var user ="";
  var fileName ="";
  if("auth_token" in localStorage){
    if(localStorage.getItem("Role")=== "admin"){
        user="admin";
        fileName="admin";
    }else if(localStorage.getItem("Role")=== "customer"){
        user="customer"
        fileName="customer"
    }
  }
  const logoutSubmit = (e) => {
    e.preventDefault();
  
    const authToken = localStorage.getItem('auth_token');
  
    fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('Role');
          localStorage.removeItem('profile');
          Swal('Success', data.message, 'success');
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
/*------------- Notification --------------*/
  const [notification, setNotification] = useState(null);
  const openNotification = Boolean(notification);
  const clickNotification = (event) => { setNotification(event.currentTarget);};
  const closeNotification = () => {setNotification(null);};
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
/*------------- image avatar --------------*/

  const [profile, setProfile] = useState(null)
  const getData = () => {
    fetch(`http://127.0.0.1:8000/api/profile`, requestOptions)
    .then(response => response.json())
    .then(result => setProfile(result))
    .catch(error => console.log('error', error));
  }
    useEffect(() => {
      getData()
    }, [])
    let image = [];
    if(profile!==null ){
        if(profile.photo!==null){
            image.push(<><Avatar alt={profile.nom} src={`http://127.0.0.1:8000/storage/images/${fileName}/${profile.photo}`}/></>);
        }else{image.push(<><Avatar alt="user image" /></>)} 
        }else{image.push(<><Avatar alt="user image"  /></>);}  
        const renderMenu = (
          <Menu anchorEl={anchorEl}  keepMounted 
            open={isMenuOpen} onClose={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Link to={`/${user}/profile`}>
              <MenuItem onClick={handleMenuClose}>
                <IconButton size="small" aria-label="AccountCircle"><AccountCircle /></IconButton>
                <Typography variant='subtitle2'>Profile</Typography>                
              </MenuItem>
            </Link>
            <Link to={`/${user}/update-password`}>
              <MenuItem onClick={handleMenuClose}>
                <IconButton size="small" aria-label="update-password"><HttpsIcon /></IconButton>
                <Typography variant='subtitle2'>Update password</Typography>     
              </MenuItem>
            </Link>
            <Link to={`/`}>
              <MenuItem onClick={() => { handleMenuClose(); logoutSubmit(); }}>
                <IconButton size="small" aria-label="logout-btn"><ExitToAppIcon /></IconButton>
                <Typography variant='subtitle2'>Logout</Typography>     
              </MenuItem>
            </Link>
          </Menu>
      
        );
        const renderMobileMenu = (
          <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right'}} keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right'}} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
            <MenuItem>
              <IconButton aria-label="mail-icon" size="small" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <Typography variant='subtitle2'>Messages</Typography>
            </MenuItem>
            <MenuItem>
              <IconButton aria-label="notification-icon" size="small" color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Typography variant='subtitle2'>Notifications</Typography>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
              <IconButton aria-label="AccountCircle" size="small" color="inherit">
                <AccountCircle />
              </IconButton>
              <Typography variant='subtitle2'>Profile</Typography>
            </MenuItem>
          </Menu>
        );
  return (
    <Box sx={{ display: 'flex' }}>
         <AppBar open={open} sx={{backgroundColor:"var(--christine)"}} position="fixed" >
          <Toolbar>
            <Box sx={{ marginLeft:"55px" }}>
              <IconButton aria-label="menu-icon" color="inherit" onClick={props.handleDrawerOpen} edge="start" >
                <MenuIcon sx={{ fontSize: 25 }} /> 
               </IconButton>
            </Box>        
            <Box sx={{ flexGrow: 1 , alignItems:"center" }} />    
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <DarkLightBtn/>
              <IconButton aria-label="mail-icon-btn" size="large" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton  aria-label="notification-icon-btn" size="large"
                color="inherit" id="notification" aria-controls={openNotification ? 'notification-menu' : undefined} 
                 aria-expanded={openNotification ? 'true' : undefined} onClick={clickNotification}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Menu id="notification-menu"  MenuListProps={{ 'aria-labelledby': 'notification-button' }} 
                 anchorEl={notification} open={openNotification}  onClose={closeNotification} TransitionComponent={Fade} 
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                 >
                   <MenuItem onClick={closeNotification}>Notification 1</MenuItem>
                   <MenuItem onClick={closeNotification}>Notification 2</MenuItem>
                   <MenuItem onClick={closeNotification}>Notification 3</MenuItem>
                   <MenuItem onClick={closeNotification}>Notification 4</MenuItem>
               </Menu> 
              <IconButton aria-label="AccountCircle" size="large" edge="end" onClick={handleProfileMenuOpen} color="inherit" >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems:"center" }}>
              <DarkLightBtn/>
              <IconButton aria-label="more-icon" size="large" onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>  
        </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  ) 
}




