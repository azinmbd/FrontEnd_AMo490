import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../redux/features/getRecipesSlice";
import { getRecipe } from "../../redux/features/getRecipeInfoSlice";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmptySearchImage from "../../assets/search.svg";

const RecipeList = ({ searchKeyword }) => {
  const characterLimit = 180;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const recipes = useSelector((state) => state.allRecipes.recipes.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

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

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchKeyword.toLowerCase())
      ) ||
      recipe.instructions.some((instruction) =>
        instruction.toLowerCase().includes(searchKeyword.toLowerCase())
      )
  );

  return (
    <section className="recipeList pt-3 pb-5">
      <Container maxWidth="xl" sx={{ pb: 5, height: "auto" }}>
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
        {filteredRecipes.length === 0 ? (
          <div className="empty-search">
            <img
              src={EmptySearchImage}
              alt="Empty Search"
              className="empty-search-img"
            />
            <Typography
              gutterBottom
              variant="h4"
              align="center"
              sx={{ pb: 5 }}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={1240}
            >
              No recipes found. Please try a different search term.
            </Typography>
          </div>
        ) : (
          <Grid container component="main" sx={{ mt: "30px", height: "auto" }}>
            {filteredRecipes.map((recipe, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1200}
                key={recipe._id}
                sx={{ height: "auto" }}
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
          </Grid>
        )}
      </Container>
    </section>
  );
};

export default RecipeList;
