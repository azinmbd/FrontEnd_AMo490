import * as React from "react";
import RecipesHeader from "../components/RecipeComps/RecipesHeader";
import FeaturedRecipe from "../components/RecipeComps/FeaturedRecipe";
import RecipeList from "../components/RecipeComps/RecipeList";
const Recipes = () => {
  // useEffect(() => {
  // }, [dispatch]);

  return (
    <React.Fragment>
      <RecipesHeader />
      <RecipeList />
      <FeaturedRecipe />
    </React.Fragment>
  );
};

export default Recipes;
