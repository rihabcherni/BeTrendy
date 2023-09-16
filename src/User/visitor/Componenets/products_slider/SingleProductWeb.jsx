import {
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddToCart,
    ProductFavButton,
    ProductImage,
  } from "./StyledComp";
  import ProductMeta from "./ProductMeta";
  import { Stack } from "@mui/material";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import ShareIcon from "@mui/icons-material/Share";
  import { useState } from "react";
  const SingleProductWeb = ({ product, matches }) => {
  const [showOptions, setShowOptions] = useState();
    return (
      <>
        <Product
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
        >
          <ProductImage src={product.image} />
          <ProductFavButton isFav={0}>
            <FavoriteIcon />
          </ProductFavButton>
          {showOptions && (
            <ProductAddToCart show={showOptions} variant="contained">
              Add to Cart
            </ProductAddToCart>
          )}
          <ProductActionsWrapper show={showOptions}>
            <Stack direction={"column"}>
              <ProductActionButton>
                <ShareIcon />
              </ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches={matches} />
      </>
    );
  };
  
  export default SingleProductWeb;