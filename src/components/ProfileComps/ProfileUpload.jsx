import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserRecipes } from "../../redux/features/userRecipesSlice";
import { getRecipe } from "../../redux/features/getRecipeInfoSlice";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { deleteRecipe } from "../../redux/features/deleteRecipeSlice";
import emptyProfile from "../../assets/emptyProfile.svg";

const ProfileUpload = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userId);
  const userRecipes = useSelector(
    (state) => state.userRecipes.userRecipes.recipes
  );
  const [showModal, setShowModal] = useState(false);
  const [recipeIdToDelete, setRecipeIdToDelete] = useState("");

  useEffect(() => {
    dispatch(getUserRecipes(userId));
  }, [dispatch, userId, userRecipes]);

  const handleRecipeInfo = (e, id) => {
    e.preventDefault();
    navigate(`/recipes/${id}`);
    dispatch(getRecipe(id));
  };

  const characterLimit = 180;
  const truncateText = (text) => {
    if (text.length <= characterLimit) {
      return text;
    }
    return text.slice(0, characterLimit) + "...";
  };

  const handleDeleteRecipe = (e, id) => {
    e.stopPropagation();
    setRecipeIdToDelete(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteRecipe(recipeIdToDelete))
      .then(() => {
        console.log("Recipe deleted successfully!");
        setShowModal(false);
        dispatch(getUserRecipes(userId));
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error.message);
        setShowModal(false);
      });
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <section style={{ backgroundColor: "#5391651a" }}>
      <Container maxWidth="xl">
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          marginBottom={3}
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay={1240}
          sx={{ pt: 4 }}
        >
          Uploaded Recipes
          <span className="line"></span>
        </Typography>
        <div className="recipe-cards">
          {userRecipes.length === 0 ? (
            <div className="empty-recipes" style={{textAlign:"center"}}>
              <img src={emptyProfile} alt="Empty" width={"25%"} />
              <Typography
                gutterBottom
                variant="h4"
                align="center"
                sx={{ pb: 5 }}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={1240}
              >
                You haven't uploaded any recipes.
              </Typography>
            </div>
          ) : (
            <Grid container component="main" sx={{ mt: "30px" }}>
              {userRecipes.map((recipe) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay={1200}
                  key={recipe._id}
                >
                  <Card className="recipeCard">
                    <CardMedia
                      component="img"
                      image={recipe.image.replace('/public', '')}
                      alt="random"
                      className="cardMedia"
                    />
                    <CardContent sx={{ flexGrow: 1 }} className="cardContent">
                      <Typography gutterBottom variant="h5" component="h2">
                        {recipe.title}
                      </Typography>
                      <Typography gutterBottom variant="span" component="span">
                        {recipe.time}
                      </Typography>
                      <Typography>
                        {recipe.instructions.length > 0
                          ? truncateText(recipe.instructions[0])
                          : ""}
                      </Typography>
                      <Button
                        size="medium"
                        sx={{ bgcolor: "custom.orange", color: "black" }}
                        onClick={(e) => handleRecipeInfo(e, recipe._id)}
                      >
                        View recipe
                      </Button>
                      <Button
                        size="medium"
                        sx={{ bgcolor: "gray", color: "white", float: "right" }}
                        onClick={(e) => handleDeleteRecipe(e, recipe._id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
        </Container>
      </section>
      <Modal open={showModal} onClose={handleCancelDelete}>
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            p: 3,
            position: "absolute",
            left: "30%",
            top: "50%",
          }}
        >
          <Typography variant="h5" sx={{ mb: 4 }}>
            Are you sure you want to delete this recipe?
          </Typography>
          <Button
            sx={{ bgcolor: "custom.orange", color: "black", mr: 2 }}
            onClick={handleConfirmDelete}
          >
            Confirm
          </Button>
          <Button className="secondbtn" onClick={handleCancelDelete}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ProfileUpload;
