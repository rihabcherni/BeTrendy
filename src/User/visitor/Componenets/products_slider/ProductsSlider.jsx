import React from "react";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "./products";
import SingleProduct from "./SingleProduct";
import SingleProductWeb from "./SingleProductWeb";

const ProductsSlider = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);
  const renderProducts = products.map((product) => (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      key={product.id}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductWeb product={product} matches={matches} />
      )}
    </Grid>
  ));
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        spacing={{ xs: 2, md: 3 }}
        sx={{ margin: "20px 4px 10px 4px" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};

export default ProductsSlider;