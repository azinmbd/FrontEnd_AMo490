import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Carousel from "react-multi-carousel";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function HCarosel(props) {

  const delay = 200
  return (
    <Container
      maxWidth="xl"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="200"
      sx={{ marginBottom: "30px" }}
    >
      <Container sx={{ paddingTop: "30px" }}>
        <Typography
          color="black"
          variant="h3"
          sx={{ mt: 3, textTransform: "uppercase", textAlign: "center" }}
        >
          <b>Latest Recipes</b>
        </Typography>
      </Container>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

      </Carousel>
    </Container>
  );
}
