import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import Products from "./Products";
import { Link } from "react-router-dom";

const ShopByProduct = (Name) => {
  const productName = [
    {
      name: "Soranib Tablet 30'S",
      route: "/cancer",
      price: 800,
    },
    {
      name: "TYLIDYS Tablet 30's",
      route: "/cancer",
      price: 600,
    },
    {
      name: "REGONAT Tablet 28's",
      route: "/cancer",
      price: 1000,
    },
    {
      name: "Pankajakasthuri Orthoherb Tablet 60's",
      route: "/cancer",
      price: 800,
    },
    {
      name: "REGONAT Tablet 28's",
      route: "/cancer",
      price: 1200,
    },
    {
      name: "REGONAT Tablet 28's",
      route: "/cancer",
      price: 1100,
    },
    {
      name: "REGONAT Tablet 28's",
      route: "/cancer",
      price: 500,
    },
    {
      name: "REGONAT Tablet 28's",
      route: "/cancer",
      price: 400,
    },
  ];
  return (
    <ShopProduct>
      <h1>PRODUCTS</h1>
      <Grid container spacing={2}>
        {productName.map((element) => {
          return (
            <Grid item xs={3}>
              <Link to={element.route}>
                <Products Name={element.name} Price={element.price} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </ShopProduct>
  );
};

const ShopProduct = styled.div`
  margin-top: 5rem;
  h1 {
    margin-bottom: 2rem;
  }
`;

export default ShopByProduct;
