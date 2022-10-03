import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Grid } from "@mui/material";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Medicine = () => {
  // useEffect(()=>{
  //   axios.get(baseurl+"/api/")
  // })
  return (
    <>
      <Navbar />
      <Tablets>
        <h1>Tablets</h1>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Tablets>
    </>
  );
};

export default Medicine;

const Tablets = styled.div`
  border: black;
`;
