import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import category from "./category/category";

const Categories = () => {
  const navigate = useNavigate();

  const navigateMedicine = (str) => {
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

  // const CategoryName = [
  //   "Tablets",
  //   "Syringe",
  //   "Vitamins & Supplements",
  //   "Surgical Instrument",
  // ];
  const CategoryName = [];

  return (
    <Catg>
      <h1>CATEGORIES</h1>
      <Grid container spacing={2}>
        {CategoryName.map((name) => {
          return (
            <Link to={name}>
              <Grid item xs={3}>
                <category Name={name} />
              </Grid>
            </Link>
          );
        })}

        {/* <Grid item xs={3}>

      </Grid> */}

        {/* <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }} onClick={navigateMedicine("/medicon")}>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tablets
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
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
                <Typography variant="body2" color="text.secondary"></Typography>
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
                <Typography variant="body2" color="text.secondary"></Typography>
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
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid> */}
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
