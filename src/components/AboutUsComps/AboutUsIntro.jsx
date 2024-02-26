import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Text from "../../assets/MainText.svg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import title from "../../assets/aboutus.svg";
import AnoutIntro from "../../assets/aboutIntro.png";
import { useNavigate } from "react-router-dom";

export default function AboutUsIntro() {
  let navigate = useNavigate();

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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="0"
          >
            {" "}
            <img
              src={title}
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
              The concept for this project originated from our UX Design course,
              where we were tasked with designing a mobile application. We
              decided to bring this idea to fruition by creating a
              recipe-sharing platform that employs AI to recommend recipes based
              on the ingredients that users have on hand.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "30px",
            justifyContent: "end",
          }}
        >
          <img
            src={AnoutIntro}
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
