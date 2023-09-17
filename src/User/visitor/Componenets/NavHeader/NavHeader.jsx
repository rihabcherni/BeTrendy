import React, { useState } from "react";
import "./NavHeader.scss";
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme,} from "@mui/material";
import DrawerComp from "./DrawerComp";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyledComp";
import  DarkLightBtn  from "../../../../DarkLightBtn";
import {StyledLink, StyledBtn} from "../../../../StyleComp";
import logo from '../../../../logo.PNG'

function NavHeader() {
  const [value, setValue] = useState(0);
  const PAGES = ["Home", "Products", "FAQ", "About-us", "Blog", "Contact-us"];
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "var(--christine)" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <img src={logo} alt="logo BeTrendy" width="60px" />
              <Typography sx={{ fontSize: "1rem",margin:"10px", fontFamily:"'Lobster', cursive", fontSize:"18px"}}>BeTrendy</Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <img src={logo} alt="logo BeTrendy" width="60px"/>
              <Typography sx={{margin:"10px", fontFamily:"'Lobster', cursive", fontSize:"18px"}}> BeTrendy</Typography>

              <Search sx={{ paddingLeft: "auto" }}>
                <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }}/>
              </Search>
              <Tabs sx={{ marginLeft:"auto"}} textColor="inherit" onChange={(e, value)=>setValue(value)}value={value} indicatorColor="secondary">   
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} sx={{ textTransform:'capitalize' }} component={StyledLink} to={(page !== "Home" ? `/be-trendy/${page.toLowerCase()}` :`/be-trendy` )}/>

                ))}
              </Tabs>
                <StyledBtn sx={{ marginLeft: "10px",color:"white", backgroundColor:"rgb(255, 106, 0)"}} variant="contained">
                  <StyledLink to='/be-trendy/login'>Login</StyledLink>
                </StyledBtn>
                <StyledBtn sx={{ marginLeft: "10px",color:"white",  backgroundColor:"rgb(255, 106, 0)"}} variant="contained">
                  <StyledLink to='/be-trendy/sign-up'>Sign Up</StyledLink>
                </StyledBtn>
                <DarkLightBtn/>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavHeader;