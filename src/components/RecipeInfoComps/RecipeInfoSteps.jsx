import React from "react";
import { useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Steps from "../../assets/steps.svg";
const RecipeInfoSteps = (props) => {
  return (
    <section className="grWave">
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 8, pb: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={6} sx={{ paddingTop: "30px" }} ></Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ paddingTop: "30px" }}>
            <img src={Steps} alt="" />
            {props.instructionsArray.map((step, index) => (
              <div key={index}>
                <Typography gutterBottom variant="h5">
                  <strong>Step {index + 1}:</strong>
                </Typography>

                <Typography variant="body1">{step}</Typography>
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default RecipeInfoSteps;
