import styled from 'styled-components';
import {Link} from "react-router-dom";
import { Button } from '@mui/material';

const StyledLink = styled(Link)`
    text-decoration: none;
    text-transform: capitalize;
    color: var(--white);
    font-weight: bold;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const StyledBtn = styled(Button)`
    text-decoration: none;
    text-transform: capitalize !important;
    background-color:var(--tree-poppy);
    color:white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
export{StyledLink,StyledBtn};

