import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

const Products = ({ Name, Price }) => {
  return (
    <ProductCard>
      <Card sx={{ maxWidth: "25vw" }}>
        <CardMedia />
        <CardContent>
          <Typography variant="h6">{Name}</Typography>
          {Price}
          <br />1 Day Delivery
          <br />
          <AddToCart>Add To Cart</AddToCart>
          <Typography variant="body2"></Typography>
        </CardContent>
      </Card>
    </ProductCard>
  );
};
const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AddToCart = styled.button`
  display: flex;
  align-items: center;
  max-height: 1rem;
`;

export default Products;
