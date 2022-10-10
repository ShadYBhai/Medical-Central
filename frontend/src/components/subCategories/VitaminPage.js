import React from "react";
import Navbar from "../../components/Navbar";
import img from "../../images/Surgical Instrument.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";

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
      <Navbar />
      <h1>Vitamins & Supplements</h1>
      <Grid container spacing={2}>
        {tablets.map((el) => {
          return (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
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
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default VitaminPage;
