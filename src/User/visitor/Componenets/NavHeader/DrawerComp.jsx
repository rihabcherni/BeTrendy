import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import QuizIcon from "@mui/icons-material/Quiz";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LoginIcon from "@mui/icons-material/Login";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText,} from "@mui/material";
import {StyledLink} from "../../../../StyleComp";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DarkLightBtn from "../../../../DarkLightBtn";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyledComp";
const DrawerComp = () => {
  const [OpenDrawer, setOpenDrawer] = useState(false);
  const PAGES = [ "Home", "Products", "FAQ", "About-us", "Blog", "Contact-us", "Login", "Sign Up",];

  const buttonRender = (element) => {
    switch (element) {
      case "Home":
        return (
          <>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <StyledLink to="/be-trendy"><ListItemText sx={{ fontWeight: "bold", color: "grey" }}>{element}</ListItemText></StyledLink>
          </>
        );
      case "Products":
        return (
          <>
            <ListItemIcon><InventoryIcon/></ListItemIcon>
            <StyledLink to="/be-trendy/products"><ListItemText sx={{ fontWeight: "bold", color: "grey" }}>{element}</ListItemText></StyledLink>          
          </>
        );
      case "FAQ":
        return (
          <>
            <ListItemIcon><QuizIcon/></ListItemIcon>
            <StyledLink to="/be-trendy/faq" ><ListItemText sx={{fontWeight: "bold", color: "grey"}}>{element}</ListItemText></StyledLink>          
          </>
        );
      case "About-us":
        return (
          <>
            <ListItemIcon> <InfoIcon /></ListItemIcon>
            <StyledLink to="/be-trendy/about-us"><ListItemText sx={{ fontWeight: "bold", color: "grey" }}>{element}</ListItemText></StyledLink>
          </>
        );
      case "Blog":
        return (
          <>
            <ListItemIcon><PostAddIcon /></ListItemIcon>
            <StyledLink to="/be-trendy/blog" ><ListItemText sx={{ fontWeight: "bold", color: "grey" }}>{element}</ListItemText></StyledLink>
          </>
      );
      case "Contact-us":
        return (
          <>
            <ListItemIcon><ContactMailIcon/></ListItemIcon>
            <StyledLink to="/be-trendy/contact-us" ><ListItemText sx={{ fontWeight: "bold", color: "grey" }}>{element}</ListItemText></StyledLink>
          </>
        );
      case "Login":
        return (
          <>
            <ListItemIcon><LoginIcon/></ListItemIcon>
            <StyledLink to="/be-trendy/login" ><ListItemText sx={{ fontWeight: "bold", color: "grey" }}>{element}</ListItemText></StyledLink>
          </>
        );
      case "Sign Up":
        return (
          <>
            <ListItemIcon><AppRegistrationIcon/></ListItemIcon>
            <StyledLink to="/be-trendy/sign-up"><ListItemText sx={{ fontWeight: "bold", color: "grey" }}>{element}</ListItemText></StyledLink>
          </>
        );
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <Drawer open={OpenDrawer} onClose={() => setOpenDrawer(false)} anchor="right" PaperProps={{sx: { width: "40%" }}}>
        <List>
          <Search sx={{ paddingLeft: "auto" }}>
            <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }}/>
          </Search>
          {PAGES.map((listelem, index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
              {buttonRender(listelem)}
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow:1 }}/>
      <Box>
        <DarkLightBtn/>
        <IconButton aria-label="menu-btn" onClick={() => setOpenDrawer(!OpenDrawer)} sx={{ marginLeft: "auto", color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Box>
    </React.Fragment>
  );
};
export default DrawerComp;