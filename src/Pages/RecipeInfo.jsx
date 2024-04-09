import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import RecipeInfoHeader from "../components/RecipeInfoComps/RecipeInfoHeader";
import RecipeInfoIngreds from "../components/RecipeInfoComps/RecipeInfoIngreds";
import RecipeInfoSteps from "../components/RecipeInfoComps/RecipeInfoSteps";
import Footer from "../components/Footer"

const RecipeInfo = () => {
  const { recipe } = useSelector((state) => state.recipeInfo.data);
  console.log(recipe);
  const ingredientsArray = recipe.ingredients;
  const instructionsArray = recipe.instructions;
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <RecipeInfoHeader title={recipe.title} image = {recipe.image}/>
      <RecipeInfoIngreds  ingredientsArray={ingredientsArray}/>
      <RecipeInfoSteps instructionsArray={instructionsArray}/>
      <Footer />
    </React.Fragment>
  );
};

export default RecipeInfo;
