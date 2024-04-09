import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import aboutus from "../../assets/aboutus.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function HAboutSection () {
  let navigate = useNavigate();

  const handleAbout = (e) => {
    e.preventDefault();
    navigate("/aboutus");
  };

  return (
    <section style={{ backgroundColor: "#F8F5E4" }}>
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
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
                <Typography
                  variant="h2"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={600}
                >
                  About Us
                </Typography>
                <Typography
                  paragraph
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={600}
                >
                  SavoRAY Recipes, your go-to destination for culinary
                  inspiration and convenience. Discover a world of flavors,
                  connect with chefs, and share your passion for cooking
                  effortlessly. With our intuitive interface, explore, create,
                  and savor delightful recipes tailored to your tastes!
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  className="secondbtn"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="1300"
                  onClick={handleAbout}
                >
                  Read More
                </Button>
              </Container>
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
              paddingBottom: "40px",
            }}
          >
            <img
              src={aboutus}
              width="90%"
              alt=""
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="200"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
