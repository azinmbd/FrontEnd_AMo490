import React, {  useLayoutEffect, useRef } from "react";
import {  Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { useLocation } from 'react-router-dom';
export default function NotFound() {
  const navigate = useNavigate();

  const location = useLocation();
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
      if (scrollRef.current) {
          scrollRef.current.scrollTo(0, 0);
      }
  }, [location.pathname]);
  return (
    <Grid
      container
      component="main"
      sx={{
        pt: 8,
      }}
      className="NotFound"
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <CssBaseline />

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        className="NotFoundItems"
        alignItems="center"
        justifyContent="end"
        flexDirection={"column"}
        display={"flex"}
        boxShadow={"none"}
      >
        <Typography variant="h4" textAlign={"center"} marginBottom={"10px"}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button
          variant="contained"
          size="large"
          className="mainbtn notFounBtn"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="1000"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back To Previous Page
        </Button>
      </Grid>
    </Grid>
  );
}
