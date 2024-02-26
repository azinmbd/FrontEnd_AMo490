import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import recipe1 from "../../assets/Recipe1.jpg";
const FeaturedRecipe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  // useEffect(() => {
  // }, [dispatch]);

  return (
    <section
      className="featuredRecipe parallax-container"
      onMouseMove={handleMouseMove}
    >
      <div
        className="parallax-layer layer1"
        style={{
          transform: `translate(-${mousePosition.x / 50}px, -${
            mousePosition.y / 50
          }px)`,
        }}
      ></div>
      <div
        className="parallax-layer layer2"
        style={{
          transform: `translate(-${mousePosition.x / 30}px, -${
            mousePosition.y / 30
          }px)`,
        }}
      ></div>
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            elevation={6}
            alignItems="center"
            justifyContent="center"
            display={"flex"}
            boxShadow={"none"}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="0"
            >
              <Container maxWidth="md">
                <Typography
                  gutterBottom
                  variant="h3"
                  marginBottom={3}
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={1240}
                >
                  Recipe Title
                </Typography>
                <Typography
                  paragraph
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={600}
                >
                  SavoRAy Recipes is a user-friendly platrorm that provides an
                  extensive assortment of recipes and instructional resources.
                  It assists users in finding food recipes that match the
                  ingredients available in their refrigerators, while also
                  facilitating the sharing of favorite recipes with others
                </Typography>
                <Stack sx={{ pt: 4 }} direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    className="secondbtn"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="1300"
                  >
                    View Recipe
                  </Button>
                </Stack>
              </Container>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: "30px",
              justifyContent: "center",
            }}
          >
            <img
              className="featuredRecipeImg"
              src={recipe1}
              width="90%"
              alt=""
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="200"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturedRecipe;
