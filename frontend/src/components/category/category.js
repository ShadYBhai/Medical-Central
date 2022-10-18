import React from "react";
import styled from "styled-components";
import InstrumentImg from "../../images/Surgical Instrument.jpg";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const Category = ({ Name, Image }) => {
  return (
    <Card sx={{ width: "20vw", height: "35vh" }}>
      <CardMedia />
      <CardContent>
        <Typography variant="h6" component="div">
          {Name}
        </Typography>
        <div>
          <img
            style={{
              maxWidth: "40%",
            }}
            src={InstrumentImg}
            srcSet={InstrumentImg}
            alt={Name}
          />
        </div>
      </CardContent>
    </Card>
  );
};

//   const Image = styled.div`
//   height: 50%;
// `;

export default Category;
