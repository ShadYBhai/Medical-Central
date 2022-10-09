import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const Products = ({ Name }) => {
  return (
    <div>
      {" "}
      <Card sx={{ maxWidth: "25vw" }}>
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
    </div>
  );
};

export default Products;
