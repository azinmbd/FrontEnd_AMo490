import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { getRecipes } from "../../redux/features/getRecipesSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../redux/features/getRecipeInfoSlice";

const FeaturedRecipe = () => {
  const characterLimit = 180;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const recipes = useSelector((state) => state.allRecipes.recipes.recipes);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    setRandomIndex(randomIndex);
  }, [recipes]);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleRecipeInfo = (e, id) => {
    e.preventDefault();
    navigate(`/recipes/${id}`);
    dispatch(getRecipe(id));
  };

  const truncateText = (text) => {
    if (text.length <= characterLimit) {
      return text;
    }
    return text.slice(0, characterLimit) + "...";
  };

  return (
    <section
      className="featuredRecipe parallax-container"
      onMouseMove={handleMouseMove}
    >
      <Typography
        gutterBottom
        variant="h3"
        align="center"
        marginBottom={3}
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay={1240}
        sx={{ pt: 3 }}
      >
        Featured Recipe
        <span className="line"></span>
      </Typography>{" "}
      <Container maxWidth="xl" sx={{position:"relative", zIndex:4}}>
        <Grid
          container
          component="main"
          sx={{ pt: 8, pb: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
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
                  {recipes[randomIndex]?.title}
                </Typography>
                <Typography gutterBottom variant="span" component="span">
                  {recipes[randomIndex]?.time}
                </Typography>
                <Typography
                  paragraph
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={600}
                >
                  {recipes[randomIndex]?.instructions?.length > 0
                    ? truncateText(recipes[randomIndex].instructions[0])
                    : ""}
                </Typography>
                <Stack sx={{ pt: 4 }} direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    className="secondbtn"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="1300"
                    onClick={(e) => handleRecipeInfo(e, recipes[randomIndex]?._id)}
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
              src={recipes[randomIndex]?.image}
              width="90%"
              alt=""
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="200"
            />
          </Grid>
        </Grid>
      </Container>
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
    </section>
  );
};

export default FeaturedRecipe;
