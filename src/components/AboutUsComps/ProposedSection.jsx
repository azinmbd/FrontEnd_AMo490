import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PROF from "../../assets/professor.png";
import title from "../../assets/CRN.svg";
import AnoutIntro from "../../assets/aboutIntro.png";
import { useNavigate } from "react-router-dom";

export default function ProposedSection() {
  let navigate = useNavigate();

  return (
    <section>
      <Container
        maxWidth="xl"
        sx={{
          pt: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={title}
          width={"400px"}
          alt=""
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay={300}
        />
      </Container>
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
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
              src={PROF}
              width="90%"
              alt=""
              data-aos="fade-down"
              data-aos-duration="2000"
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
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="0"
            >
              <Typography gutterBottom variant="h3" component="h2">
                Professor Bambang Sarif
              </Typography>
              <Typography
                paragraph
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={600}
              >
                This project was proposed to Professor Bambang Sarif for the
                course Applied Research Project. We were excited to collaborate
                with him during our course. He has worked as Unix/Linux System
                Administrator, Network Engineer/Manager, Software developer,
                research engineer in video communication and machine learning.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
