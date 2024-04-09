import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IngredientsTitle from "../../assets/ingre.svg";

const RecipeInfoIngreds = (props) => {
  return (
    <section className="pt-3 bgMilk orgWave">
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 8, pb: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={6} sx={{ paddingTop: "30px" }}>
            <img src={IngredientsTitle} alt="" />{" "}
            <ul>
              {props.ingredientsArray.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}
          ></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default RecipeInfoIngreds;
