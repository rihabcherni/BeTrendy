import   { useContext } from "react";
import { ColorModeContext } from "./Theme";
import { IconButton, useTheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from "@mui/icons-material/LightMode";

const DarkLightBtn = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <>
      {theme.palette.mode === "light" ? (
        <IconButton aria-label="dark-light"
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeIcon />
        </IconButton>
      ) : (
        <IconButton aria-label="dark-light"
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeIcon />
        </IconButton>
      )}
    </>
  );
};
export default DarkLightBtn;