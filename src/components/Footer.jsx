import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import Instagram from "../components/svg/instagram";
import Linkdin from "../components/svg/linkdin";
import Container from "@mui/material/Container";

export const Footer = () => {
  return (
    <Grid
      container
      component="main"
      sx={{ bgcolor: "secondary.main" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      className="animationHolder"
    >
      <Container
        maxWidth="xl"
        sx={{ bgcolor: "secondary.main" }}
        className="footerbg"
      >
        <Grid
          container
          sx={{ pt: 8, pb: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            alignItems="center"
            display={"flex"}
            boxShadow={"none"}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              data-aos-delay="0"
            >
              <img src={logo} alt="" width={"250px"} sx={{ mb: 3 }} />
              <Typography
                color="black"
                variant="h5"
                sx={{ mt: 3, textTransform: "uppercase" }}
              >
                SavoRAy Recipes
                <br />
              </Typography>
              <Typography color="black" variant="p">
                SavoRAy Recipes lorem ipsum SavoRAy Recipes lorem ipsumSavoRAy
                Recipes lorem ipsumSavoRAy Recipes lorem ipsum
                <br />
              </Typography>
              <Typography
                color="white"
                variant="h5"
                sx={{ mt: 3, textTransform: "uppercase" }}
              >
                <b>SOCIALS</b>
              </Typography>
              <div className="d-flex">
                <Instagram sx={{ mt: 3 }} />
                <Linkdin color="#F8F5E4" sx={{ mt: 3 }} />
              </div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            alignItems="center"
            justifyContent="center"
            display={"flex"}
            boxShadow={"none"}
          >
            <div className="svgHolder"></div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
