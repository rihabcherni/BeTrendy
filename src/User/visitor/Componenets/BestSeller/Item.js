import { Button, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
export default function Item(props) {
  return (
    <div className="card">
      <IconButton  size="large" sx={{ position:"absolute" }}>
        <SearchIcon fontSize="large"/>
      </IconButton>
      <img className="product--image" src={props.url} alt="product" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <Button className="button-add" sx={{ m:1 }}>Add to Cart</Button>
    </div>
  );
}