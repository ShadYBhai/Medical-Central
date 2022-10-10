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
    <Card sx={{ maxWidth: "25vw" }}>
      <CardActionArea>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Name}
          </Typography>
          <div>
            <img
              style={{
                maxWidth: "100%",
              }}
              src={InstrumentImg}
              srcSet={InstrumentImg}
              alt={Name}
            />
          </div>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// const Image = styled.div`
//   height: 50%;
// `;

export default Category;
