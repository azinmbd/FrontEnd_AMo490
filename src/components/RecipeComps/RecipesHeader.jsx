import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const RecipesHeader = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    onSearch(searchKeyword);
  };

  return (
    <section className="recipeBg">
      <Container maxWidth="xl" sx={{ pt: 5 }}>
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          marginBottom={3}
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay={1240}
        >
          Looking for Something? Search for it!!
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
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Button
            variant="contained"
            size="large"
            className="secondbtn"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1300"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Stack>
      </Container>
    </section>
  );
};

export default RecipesHeader;
