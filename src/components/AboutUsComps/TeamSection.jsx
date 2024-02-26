import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AZ from "../../assets/A.png";
import RZ from "../../assets/R.png";
import Linkdin from "../svg/linkdin";

export default function TeamSection() {
  return (
    <section className="teamSection bgMilk pt-3">
      <Container maxWidth="xl">
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          marginBottom={3}
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay={1240}
          sx={{ mt: "30px" }}
        >
          Team Members
        </Typography>
        <Grid container component="main" sx={{ mt: "30px", pb: "60px" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1200}
          >
            <CardMedia
              component="img"
              image={AZ}
              width={"200px"}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }} className="cardContent">
              <Typography gutterBottom variant="h5" component="h2">
                Azin Mobedmehdiabadi
              </Typography>
              <Typography gutterBottom variant="h6" component="p">
                I'm a driven Front-End Developer with a passion for bringing
                digital ideas to life. My journey in web development started as
                a pursuit of creativity, and it has evolved into a career marked
                by innovative solutions and collaborative successes. With a
                foundation in HTML, CSS, and JavaScript, I've honed my skills in
                modern frameworks like React and Redux, creating captivating
                user experiences. <br />
                Currently, I am enrolled in Computer and Information Systems PBD
                program specialized in Emerging technology at Douglas College.
              </Typography>

              <a>
                <Linkdin color="#539165" sx={{ mt: 3 }} />
              </a>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: "30px",
              justifyContent: "end",
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1200}
          >
            <CardMedia component="img" image={RZ} width={200} alt="random" />
            <CardContent sx={{ flexGrow: 1 }} className="cardContent">
              <Typography gutterBottom variant="h5" component="h2">
                MohammadReza Chegini
              </Typography>
              <Typography gutterBottom variant="h6" component="p">
                I am a Computer and Information Systems student currently
                pursuing the Post-Baccalaureate Diploma in Emerging Technology
                at Douglas College. With a strong foundation in Linux and
                mid-level proficiency in Node.js and Django, I am well-equipped
                to handle various technical challenges. I'm excited to connect
                with like-minded professionals, explore opportunities, and
                contribute my expertise to innovative projects.
                <br />
                Currently, I am enrolled in Computer and Information Systems PBD
                program specialized in Emerging technology at Douglas College.
              </Typography>

              <a>
                <Linkdin color="#539165" sx={{ mt: 3 }} />
              </a>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
