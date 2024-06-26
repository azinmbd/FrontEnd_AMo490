import React, { useEffect } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import "./styles/app.scss";
import AOS from "aos";
import NoAuthHeader from "./components/NoAuthHeader";
import AuthHeader from "./components/AuthHeader";
import SignUp from "./Pages/SignUp";
import Recipes from "./Pages/Recipes";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import RecipeInfo from "./Pages/RecipeInfo";
import AskAI from "./Pages/AskAI";
import Profile from "./Pages/Profile";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  AOS.init({ once: true });
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  console.log(token);
  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <NoAuthHeader />
      {token ? <AuthHeader /> : <NoAuthHeader />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="recipes">
          <Route path=":coffeeId" element={<RecipeInfo />} />
        </Route>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/askai" element={<AskAI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
