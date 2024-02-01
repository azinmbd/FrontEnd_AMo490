import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import askAIImg from "../../assets/askAIImg.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function HAboutSection() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        component="main"
        sx={{ pt: 8, pb: 8 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}
        >
          <img
            src={askAIImg}
            width="90%"
            alt=""
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          />
        </Grid>
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
                <Typography
                  variant="h2"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={600}
                >
                  Ask AI
                </Typography>
                <Typography
                  paragraph
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={600}
                >
                  You can utilize the advanced capabilities of an AI-powered system to explore a diverse range of mouth-watering meal ideas that you can cook using your available ingredients. With its intelligent algorithms and predictive modeling, the AI system can suggest creative and innovative recipes that will tantalize your taste buds and make your cooking experience more enjoyable.
                </Typography>

                <Link to="/askai">
                  <Button
                    variant="contained"
                    size="large"
                    className="mainbtn"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="1000"
                  >
                    Try it out!
                  </Button>
                </Link>
              </Container>
            </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
