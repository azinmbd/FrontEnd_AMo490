import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Text from "../../assets/MainText.svg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import firstpic from "../../assets/firstpic.png";
import { useNavigate } from "react-router-dom";
export default function HFirstSection() {
  let navigate = useNavigate();

  const handleRecipes = (e) => {
    e.preventDefault();
  };  
  const handleAskAi = (e) => {
    e.preventDefault();
  };
  return (
    <Container maxWidth="xl">
      <Grid
        container
        component="main"
        sx={{ pt: 8 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <CssBaseline />

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
              <img
                src={Text}
                alt=""
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay={300}
              />
              <Typography
                paragraph
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={600}
              >
              SavoRAy Recipes is a user-friendly platrorm that provides an extensive assortment of recipes
              and instructional resources. It assists users in finding food recipes that match the ingredients
              available in their refrigerators, while also facilitating the sharing of favorite recipes with others
              </Typography>
              <Stack sx={{ pt: 4 }} direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  className="mainbtn"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="1000"
                  onClick={handleAskAi}
                >
                  ASk AI
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  className="secondbtn"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="1300"
                  onClick={handleRecipes}
                >
                  Recipes
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
          sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}
        >
          <img
            src={firstpic}
            width="90%"
            alt=""
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="200"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
