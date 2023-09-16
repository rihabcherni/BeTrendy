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
  
  const SingleProduct = ({ product, matches }) => {
    return (
      <>
        <Product>
          <ProductImage src={product.image} />
          <ProductMeta product={product} matches={matches} />
          <ProductActionsWrapper>
            <Stack direction={"row"}>
              <ProductFavButton isFav={0}>
                <FavoriteIcon />
              </ProductFavButton>
              <ProductActionButton>
                <ShareIcon />
              </ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
      </>
    );
  };
  
  export default SingleProduct;