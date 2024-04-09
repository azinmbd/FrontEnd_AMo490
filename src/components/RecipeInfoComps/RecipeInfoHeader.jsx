import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const RecipeInfoHeader = (props) => {
    console.log(props)
  return (
    <section
      style={{ backgroundImage: `url(${props.image})`, backgroundSize:"cover" }}
      className="recipeInfoBg pt-5 mt-5"
    >
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Container maxWidth="md">
            <Typography
              gutterBottom
              variant="h3"
              align="center"
              marginBottom={3}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={1240}
             sx={{textShadow:"0 4px 14px white", color:"black"}}
            >
              {props.title}
            </Typography>
          </Container>
        </Grid>
      </Container>
    </section>
  );
};

export default RecipeInfoHeader;
