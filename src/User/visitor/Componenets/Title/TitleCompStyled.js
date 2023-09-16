import styled from 'styled-components';
import { Box } from '@mui/material';
export const StyledTitleComp = styled(Box)`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  position: relative;
  margin-bottom: 20px;
  z-index: 999;
  &:after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    height: 40px;
    width: 180px;
    border-radius: 4px;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-position: center;
    background: url(https://i.ibb.co/d7tSD1R/heading-line-white.png);
    background-repeat: no-repeat;
    background-position: center;
}`;