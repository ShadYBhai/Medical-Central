import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const category = ({ navigateMedicine, Name }) => {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={navigateMedicine}>
      <CardActionArea>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Name}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default category;
