import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import img from "../../assets/userpic.png";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MuiAlert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { addRecipe } from "../../redux/features/createRecipeSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProfileHeader = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    chef: null,
    time: "",
    level: "",
    image: null,
    ingredients: [],
    instructions: [],
  });
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ""],
    });
  };

  const handleAddStep = () => {
    setFormData({
      ...formData,
      instructions: [...formData.instructions, ""],
    });
  };

  const handleSaveRecipe = async () => {
    if (
      !formData.title ||
      !formData.time ||
      !formData.level ||
      !formData.image ||
      formData.ingredients.some((ingredient) => !ingredient.trim()) ||
      formData.instructions.some((step) => !step.trim())
    ) {
      setShowAlert(true);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("chef", userId);
    formDataToSend.append("time", formData.time);
    formDataToSend.append("level", formData.level);
    formDataToSend.append("image", formData.image); 
    formDataToSend.append(
      "ingredients",
      formData.ingredients.filter((ingredient) => ingredient.trim() !== "")
    );
    formDataToSend.append("instructions", formData.instructions.join(", "));
    try {
      dispatch(addRecipe(formDataToSend));
      handleClose();
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  return (
    <React.Fragment>
      <section className="profileBg"></section>
      <section className="profileSec">
        <Container maxWidth="xl">
          <CardMedia
            component="img"
            image={img}
            alt="random"
            className="cardMedia userProfile"
          />
          <Typography
            gutterBottom
            variant="h2"
            align="center"
            marginBottom={3}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1240}
          >
            Welcome
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            align="center"
            marginBottom={3}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay={1240}
          >
            Azin
          </Typography>
          <Button className="secondbtn" onClick={handleOpen}>
            Add Recipe
          </Button>
        </Container>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Add Recipe
          </Typography>
          <hr />
          <form>
            <Grid
              container
              component="main"
              sx={{ pt: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
                <Typography variant="h6">Recipe Title:</Typography>
                <TextField
                  label="Recipe Title"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
                <Typography variant="h6">Time it takes to cook:</Typography>
                <TextField
                  label="Recipe Time"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Grid
              container
              component="main"
              sx={{ pt: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
                <Typography variant="h6">Hardness Level:</Typography>
                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel>Recipe Level</InputLabel>
                  <Select
                    label="Recipe Level"
                    name="level"
                    required
                    value={formData.level}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Easy">Easy</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Hard">Hard</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
                <Typography sx={{ pb: 3 }} variant="h6">
                  Upload Cove photo:
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              component="main"
              sx={{ pt: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
                <Typography variant="h6">Ingredients</Typography>
                {formData.ingredients.map((ingredient, index) => (
                  <TextField
                    key={index}
                    label={`Ingredient ${index + 1}`}
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={ingredient}
                    onChange={(e) => {
                      const updatedIngredients = [...formData.ingredients];
                      updatedIngredients[index] = e.target.value;
                      setFormData({
                        ...formData,
                        ingredients: updatedIngredients,
                      });
                    }}
                  />
                ))}
                <IconButton onClick={handleAddIngredient}>
                  <AddIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
                <Typography variant="h6">Steps</Typography>
                {formData.instructions.map((step, index) => (
                  <TextField
                    key={index}
                    label={`Step ${index + 1}`}
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={step}
                    onChange={(e) => {
                      const updatedSteps = [...formData.instructions];
                      updatedSteps[index] = e.target.value;
                      setFormData({
                        ...formData,
                        instructions: updatedSteps,
                      });
                    }}
                  />
                ))}
                <IconButton onClick={handleAddStep}>
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
            {showAlert && (
              <Alert severity="error" sx={{ mt: 4 }}>
                There was an error in creating your Recipe. Please try again.
              </Alert>
            )}
            <Button
              variant="contained"
              className="secondbtn"
              fullWidth
              sx={{mt:5}}
              onClick={handleSaveRecipe}
            >
              Save Recipe
            </Button>
          </form>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ProfileHeader;
