import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const navigateMedicine = () => {
    navigate("/medicine");
  };
  const navigateSyringe = () => {
    navigate("/syringe");
  };
  const navigateVitamin = () => {
    navigate("/vitamin");
  };
  const navigateInstrument = () => {
    navigate("/instrument");
  };

  return (
    <Catg>
      <h1>CATEGORIES</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }} onClick={navigateMedicine}>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tablets
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }} onClick={navigateSyringe}>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Syringes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }} onClick={navigateVitamin}>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vitamins & Supplements
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }} onClick={navigateInstrument}>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Surgical Instrument
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Catg>
  );
};
const Item = styled.div`
  background-color: yellow;
  height: 4rem;
  width: 5rem;
`;

const Catg = styled.div`
  margin-top: 4rem;
  h1 {
    margin-bottom: 2rem;
  }
`;
export default Categories;
