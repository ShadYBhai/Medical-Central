import React from "react";
import Navbar from "../../components/Navbar";
import img from "../../images/Surgical Instrument.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import styled from "styled-components";

const VitaminPage = () => {
  const tablets = [
    {
      name: "Soranib Tablet 30'S",
      image: img,
    },
    {
      name: "TYLIDYS Tablet 30's",
      image: img,
    },
    {
      name: "REGONAT Tablet 28's",
      image: img,
    },
    {
      name: "Pankajakasthuri Orthoherb Tablet 60's",
      image: img,
    },
    {
      name: "REGONAT Tablet 28's",
      image: img,
    },
  ];
  return (
    <>
      <h1>Vitamins & Supplements</h1>
      <Grid container spacing={2}>
        {tablets.map((el) => {
          return (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {el.name}
                    <div>
                      <img
                        style={{
                          maxWidth: "100%",
                        }}
                        src={el.image}
                        alt=""
                      />
                    </div>
                    <AddToCart>Add To Cart</AddToCart>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
const AddToCart = styled.button``;

export default VitaminPage;
