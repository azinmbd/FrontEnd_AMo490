import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import RecipesHeader from "../components/RecipeComps/RecipesHeader";
import FeaturedRecipe from "../components/RecipeComps/FeaturedRecipe";
import RecipeList from "../components/RecipeComps/RecipeList";
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";

const Recipes = () => {
  const location = useLocation();
  const scrollRef = useRef(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <React.Fragment>
      <RecipesHeader onSearch={handleSearch} />
      <RecipeList searchKeyword={searchKeyword} />
      <FeaturedRecipe />
      <Footer />
    </React.Fragment>
  );
};

export default Recipes;
