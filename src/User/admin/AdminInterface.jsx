import React ,{useState} from "react";
import { Outlet} from 'react-router-dom';
import { MenuItem,Drawer } from "../admin/components/Sidebar/SideBarFunction";
import {Box, List, IconButton} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarNav from "./components/Sidebar/AppBarNav";
import Logo from '../../logo.PNG'
import { SidebarAdmin } from "./components/SidebarAdmin";
export default function AdminInterface() {  
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };

  return (
    <Box bgcolor="background.paper" sx={{ p: 1 }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarNav handleDrawerOpen={handleDrawerOpen}/>
        <Drawer PaperProps={{sx:{backgroundColor:"var(--christine)"}}} variant="permanent" open={open}>
          <div style={{fontWeight:"bold" ,margin:"8px 5px", padding:"0 5px",fontFamily: 'Fredoka'}}>
            <img src={Logo} alt='logo' style={{verticalAlign: "middle", width:"45px", borderRadius:"50%"}}/>
            <span style={{fontSize:"16px", margin:"0 20px", fontFamily: "'Lobster', cursive"}} > BeTrendy </span>
            <IconButton aria-label="menu-icon" onClick={handleDrawerClose}><MenuIcon sx={{ fontSize: 25 }}/></IconButton>
          </div>
          <List>{SidebarAdmin.map((lien) => (
            <div key={lien.id}>
              <MenuItem item={lien} open={open}/>
            </div>
            ))}
          </List>
        </Drawer>      
        <Box component="main" sx={{ flexGrow: 1,p:2}}>
          <div style={{ marginTop:"50px" }}>
             <Outlet/>
          </div> 
        </Box>     
      </Box>
    </Box>
  );
}
