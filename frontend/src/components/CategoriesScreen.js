import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Category from "./Category/Category";
import Navbar from "./Navbar";
import InstrumentImg from "../images/Surgical Instrument.jpg";

const CategoriesScreen = () => {
  const CategoryName = [
    {
      name: "Tablets",
      route: "/medicine",
      Image: InstrumentImg,
    },
    {
      name: "Syringe",
      route: "/syringe",
      Image: InstrumentImg,
    },
    {
      name: "Vitamins & Supplements",
      route: "/vitamin",
      Image: InstrumentImg,
    },
    {
      name: "Surgical Instrument",
      route: "/instrument",
      Image: InstrumentImg,
    },
  ];

  return (
    <>
      <Navbar />
      <Catg>
        <h1>CATEGORIES</h1>
        <Grid container spacing={2}>
          {CategoryName.map((element) => {
            return (
              <Grid item xs={3}>
                <Link to={element.route}>
                  <Category Name={element.name} Image={InstrumentImg} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Catg>
    </>
  );
};
const Catg = styled.div`
  margin-top: 4rem;
  h1 {
    margin-bottom: 2rem;
    color: white;
  }
`;
export default CategoriesScreen;
