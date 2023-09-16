import styled from 'styled-components';
import { Box, Button, Typography } from '@mui/material';

export const BoxModalContent = styled(Box)`
      border-radius: 20px;
      padding: 20px;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
`;
export const BoxModalContentLine = styled(Box)`
    border: 2px dashed rgb(255, 106, 0);
    padding: 10px;
    border-radius: 10px;
`;
export const ImageBox = styled(Box)`
    position: fixed;
    transform: translate(0,-190%);
    z-index:999;
`;
export const Image = styled("img")`
    width: 30%;
    margin-bottom: -20%;
`;
export const TH2 = styled(Typography)`
    color: rgb(255, 106, 0);
    font-size: 1.5rem;
    font-weight: bold;   
`;
export const P1 = styled(Typography)`
    color: rgb(124, 56, 8);
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px;
`;
export const Close = styled(Button)`
    position: relative;
    left: 46%;
    transform: translate(0 ,-100%);
    padding: 0px;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    color: rgb(51, 51, 51);
    background-color: white;
    "&:hover" {
        background-color: white;
    }
`;
export const FormBox = styled(Box)`
      display: flex;
      flex-direction: column;
      align-items: center;  
`;
export const BtnSub = styled(Box)`
      padding: 10px 30px;
      margin:10px 20px;
      border: none;
      background-color: rgb(255, 106, 0);
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      "&:hover":{
        background-color: rgb(255, 106, 0);
      }
    }
`;