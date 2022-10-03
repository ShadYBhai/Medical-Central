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
import Category from "./category/category";

const Categories = () => {
  const navigate = useNavigate();

  // const navigateMedicine = (str) => {
  //   navigate("/medicine");
  // };
  // const navigateSyringe = () => {
  //   navigate("/syringe");
  // };
  // const navigateVitamin = () => {
  //   navigate("/vitamin");
  // };
  // const navigateInstrument = () => {
  //   navigate("/instrument");
  // };

  // const CategoryName = [
  //   "Tablets",
  //   "Syringe",
  //   "Vitamins & Supplements",
  //   "Surgical Instrument",
  // ];
  const CategoryName = [
    {
      name: "Tablets",
      route: "/medicine",
    },
    {
      name: "Syringe",
      route: "/syringe",
    },
    {
      name: "Vitamins & Supplements",
      route: "/vitamin",
    },
    {
      name: "Surgical Instrument",
      route: "/instrument",
    },
  ];

  return (
    <Catg>
      <h1>CATEGORIES</h1>
      <Grid container spacing={2}>
        {CategoryName.map((element) => {
          return (
            <Grid item xs={3}>
              <Link to={element.route}>
                <Category Name={element.name} />
              </Link>
            </Grid>
          );
        })}

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
