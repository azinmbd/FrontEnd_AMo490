import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import CheckIcon from "@mui/icons-material/Check";
import recipe1 from "../../assets/Recipe1.jpg";
import recipe2 from "../../assets/Recipe2.jpg";
import recipe3 from "../../assets/Recipe3.jpg";
import { Link } from "react-router-dom";

const HrecipesSection = () => {
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {}, []);

  return (
    <section className="recipesSection pt-3">
      <Container maxWidth="xl">
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          marginBottom={3}
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay={1240}
        >
          Recipes
          <span className="line"></span>
        </Typography>
        <Grid container component="main" sx={{ mt: "30px" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1200}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
              className="recipeCard"
            >
              <CardMedia
                component="img"
                sx={{ width: "70% !important" }}
                image={recipe2}
                alt="random"
                className="cardMedia"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Pasta Alfredo
                </Typography>
                <Typography gutterBottom variant="span" component="span">
                  1hrs
                </Typography>
                <Typography>
                  Grab a skillet that is large enough to fit the 8 ounces of
                  fettuccine pasta. Place the skillet on the stove over
                  medium-high heat. Into the pan, add the milk, chicken broth,
                  butter, and garlic. Bring these ingredients to a simmer and
                  then add the pasta
                </Typography>
              </CardContent>

              <Button
                size="medium"
                sx={{ bgcolor: "custom.orange", color: "black" }}
                className="addtocartbtn"
              >
                view recipe
              </Button>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1350}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
              className="recipeCard"
            >
              <CardMedia
                component="img"
                sx={{ width: "70% !important" }}
                image={recipe3}
                alt="random"
                className="cardMedia"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Pasta Alfredo
                </Typography>
                <Typography gutterBottom variant="span" component="span">
                  1hrs
                </Typography>
                <Typography>
                  Grab a skillet that is large enough to fit the 8 ounces of
                  fettuccine pasta. Place the skillet on the stove over
                  medium-high heat. Into the pan, add the milk, chicken broth,
                  butter, and garlic. Bring these ingredients to a simmer and
                  then add the pasta
                </Typography>
              </CardContent>

              <Button
                size="medium"
                sx={{ bgcolor: "custom.orange", color: "black" }}
                className="addtocartbtn"
              >
                view recipe
              </Button>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1450}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
              className="recipeCard"
            >
              <CardMedia
                component="img"
                sx={{ width: "70% !important" }}
                image={recipe1}
                alt="random"
                className="cardMedia"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Pasta Alfredo
                </Typography>
                <Typography>
                  Grab a skillet that is large enough to fit the 8 ounces of
                  fettuccine pasta. Place the skillet on the stove over
                  medium-high heat. Into the pan, add the milk, chicken broth,
                  butter, and garlic. Bring these ingredients to a simmer and
                  then add the pasta
                </Typography>
                <Typography gutterBottom variant="span" component="span">
                  1hrs
                </Typography>
              </CardContent>

              <Button
                size="medium"
                sx={{ bgcolor: "custom.orange", color: "black" }}
                className="addtocartbtn"
              >
                view recipe
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HrecipesSection;
