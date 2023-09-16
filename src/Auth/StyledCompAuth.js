import {  Avatar, Button, Container, FormControl, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonAuth = styled(Button)(() => ({
    backgroundColor: "rgb(255, 106, 0)",
    width:"100%" , 
    margin:"1% 0% 3%", 
    padding:"5px", 
    fontSize:"14px", 
    textTransform: "capitalize",
    "&:hover": {
        backgroundColor: "var(--manhattan)",
        color:"var(--rangoon-green)"
    },
    "&:focus": {
        backgroundColor: "green",
        color:"var(--white)"
    },
}));

export const InputAuth = styled(FormControl)(() => ({
    width:"100%" ,
}));
export const InputAuth2 = styled(FormControl)(() => ({
    width:"100%", margin:"1%" 
}));

export const AvatarAuth = styled(Avatar)(() => ({
    backgroundColor: "rgb(255, 106, 0)", width: 50, height: 50 
}));
export const MediaAuthBtn = styled(Button)(() => ({
    color:"white", 
    border:"none",
    width:"100%" , 
    margin:"0.5% 0", 
    padding:"5px", 
    fontSize:"12px", 
    textTransform: "capitalize",
    "&:hover": {
        backgroundColor: "var(--manhattan)",
        color:"var(--rangoon-green)"
    },
    "&:focus": {
        backgroundColor: "green",
        color:"var(--white)"
    },
}));
export const TitleAuth = styled(Typography)(({ theme }) => ({
    margin: '0 0 4%',
    textTransform: 'capitalize',
    color: theme.palette.mode === 'light' ?  'var(--christine)' :'var(--white)',
}));
export const TextAuth = styled(Typography)(({ theme }) => ({
    textAlign:"center",
    textTransform: 'capitalize',
    color: theme.palette.mode === 'light' ?  'var(--rangoon-green)' :'var(--white)',
}));


export const ContainerAuth = styled(Container)(({ matches, theme }) => ({
    padding:"5px 3%",
    fontSize: "20px",
    color: "rgb(28, 19, 19)",
    width: "35%",
    position: "absolute",
    top: "50%",
    left:"50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid rgb(228, 226, 226)",
    borderRadius:"5px",
    [theme.breakpoints.down("md")]: {
        padding:"20px 3%",
        fontSize: "18px",
        width: "60%",
        margin: "2% 20%"
      },
    [theme.breakpoints.down("sm")]: {
        padding:"20px 3%",
        fontSize: "18px",
        width: "80%",
        margin: "2% 10%"
      },
}));




