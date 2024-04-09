import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { getRecipes } from "../../redux/features/getRecipesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecipe } from "../../redux/features/getRecipeInfoSlice";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function HCarosel(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const recipes = useSelector((state) => state.allRecipes.recipes.recipes);
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  const characterLimit = 180;
  const truncateText = (text) => {
    if (text.length <= characterLimit) {
      return text;
    }
    return text.slice(0, characterLimit) + "...";
  };
  const delay = 200;
  const handleRecipeInfo = (e, id) => {
    e.preventDefault();
    navigate(`/recipes/${id}`);
    dispatch(getRecipe(id));
  };
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
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={3000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {recipes?.map((recipe, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={1200}
              key={recipe._id}
            >
              <Card className="recipeCard">
                <CardMedia
                  component="img"
                  image={recipe.image}
                  alt="random"
                  className="cardMedia"
                />
                <CardContent sx={{ flexGrow: 1 }} className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    {recipe.title}
                  </Typography>
                  <Typography gutterBottom variant="span" component="span">
                    {recipe.time}
                  </Typography>
                  <Typography>
                    {recipe.instructions.length > 0
                      ? truncateText(recipe.instructions[0])
                      : ""}
                  </Typography>
                  <Button
                    size="medium"
                    sx={{ bgcolor: "custom.orange", color: "black" }}
                    className="addtocartbtn"
                    onClick={(e) => handleRecipeInfo(e, recipe._id)}
                  >
                    view recipe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
