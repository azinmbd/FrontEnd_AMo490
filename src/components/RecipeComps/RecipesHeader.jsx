import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const RecipesHeader = () => {
  // useEffect(() => {
  // }, [dispatch]);

  return (
    <section className="recipeBg">
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Container maxWidth="md">
            {" "}
            <Typography
              gutterBottom
              variant="h3"
              align="center"
              marginBottom={3}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={1240}
            >
              Looking for Something search for it!!
              <span className="line"></span>
            </Typography>
            <Stack
              sx={{ position: "relative" }}
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              display={"flex"}
              boxShadow={"none"}
            >
              <TextField
                sx={{ width: "60%" }}
                id="outlined-basic"
                label="Search For Recipe"
                variant="outlined"
              />
              <Button
                variant="contained"
                size="large"
                className="secondbtn"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="1300"
              >
                Search
              </Button>
            </Stack>
          </Container>
        </Grid>
      </Container>
    </section>
  );
};

export default RecipesHeader;
