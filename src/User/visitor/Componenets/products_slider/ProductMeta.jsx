import React from "react";
import { ProductMetaWrapper } from "./StyledComp";
import { Rating, Typography } from "@mui/material";

const ProductMeta = ({ product, matches }) => {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {product.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        {product.price}
      </Typography>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </ProductMetaWrapper>
  );
};

export default ProductMeta;