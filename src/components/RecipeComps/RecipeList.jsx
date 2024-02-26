import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const RecipeList = () => {
  const characterLimit = 180;

  const truncateText = (text) => {
    if (text.length <= characterLimit) {
      return text;
    }
    return text.slice(0, characterLimit) + "...";
  };

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      chef: {
        firstName: "John",
        lastName: "Doe",
        numberOfRecipes: 1,
      },
      ingredients: [
        "200g spaghetti",
        "100g pancetta or guanciale, diced",
        "2 large eggs",
        "50g grated Parmesan cheese",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Cook spaghetti according to package instructions until al dente.",
        "In a skillet, cook pancetta until crispy. Set aside.",
        "In a bowl, whisk together eggs, Parmesan cheese, salt, and pepper.",
        "Once spaghetti is cooked, drain it and return it to the pot.",
        "Add cooked pancetta to the pot with spaghetti.",
        "Quickly pour egg mixture over the hot spaghetti, stirring continuously until eggs thicken and coat the pasta.",
        "Serve hot, garnished with additional Parmesan cheese and black pepper.",
      ],
      time: "30 minutes",
      level: "Intermediate",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Chicken Alfredo Pasta",
      chef: {
        firstName: "Jane",
        lastName: "Smith",
        numberOfRecipes: 1,
      },
      ingredients: [
        "250g fettuccine pasta",
        "2 chicken breasts, cooked and diced",
        "2 cups heavy cream",
        "1 cup grated Parmesan cheese",
        "4 cloves garlic, minced",
        "Salt and pepper to taste",
        "Fresh parsley for garnish",
      ],
      instructions: [
        "Cook fettuccine pasta according to package instructions until al dente. Drain and set aside.",
        "In a large skillet, sauté minced garlic until fragrant.",
        "Add cooked chicken to the skillet and cook until heated through.",
        "Pour in heavy cream and bring to a simmer. Allow the sauce to thicken slightly.",
        "Stir in grated Parmesan cheese until melted and smooth.",
        "Season with salt and pepper to taste.",
        "Add cooked fettuccine to the skillet, tossing to coat the pasta evenly with the sauce.",
        "Serve hot, garnished with fresh parsley.",
      ],
      time: "45 minutes",
      level: "Intermediate",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Vegetable Stir-Fry",
      chef: {
        firstName: "Emily",
        lastName: "Johnson",
        numberOfRecipes: 1,
      },
      ingredients: [
        "2 cups mixed vegetables (bell peppers, broccoli, carrots, etc.)",
        "200g tofu, diced",
        "3 tablespoons soy sauce",
        "2 tablespoons sesame oil",
        "2 cloves garlic, minced",
        "1 tablespoon ginger, grated",
        "Salt and pepper to taste",
      ],
      instructions: [
        "In a large skillet or wok, heat sesame oil over medium-high heat.",
        "Add minced garlic and grated ginger. Sauté until fragrant.",
        "Add mixed vegetables and tofu to the skillet. Stir-fry until vegetables are tender-crisp and tofu is lightly browned.",
        "Drizzle soy sauce over the vegetables and tofu. Season with salt and pepper to taste.",
        "Continue to stir-fry for another 2-3 minutes.",
        "Serve hot, optionally garnished with sliced green onions and sesame seeds.",
      ],
      time: "25 minutes",
      level: "Easy",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Classic Beef Stew",
      chef: {
        firstName: "Michael",
        lastName: "Brown",
        numberOfRecipes: 1,
      },
      ingredients: [
        "1 kg beef stew meat, cubed",
        "4 carrots, peeled and sliced",
        "3 potatoes, peeled and cubed",
        "1 onion, chopped",
        "4 cups beef broth",
        "2 tablespoons tomato paste",
        "2 cloves garlic, minced",
        "2 bay leaves",
        "Salt and pepper to taste",
        "2 tablespoons vegetable oil",
      ],
      instructions: [
        "In a large pot, heat vegetable oil over medium-high heat.",
        "Add beef stew meat and brown on all sides.",
        "Add chopped onions and minced garlic. Sauté until onions are translucent.",
        "Stir in tomato paste and cook for another minute.",
        "Add carrots, potatoes, and bay leaves to the pot.",
        "Pour in beef broth and bring to a simmer.",
        "Cover and cook over low heat for 2-3 hours, or until meat is tender.",
        "Season with salt and pepper to taste.",
        "Serve hot, garnished with chopped fresh parsley.",
      ],
      time: "3 hours",
      level: "Advanced",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Mushroom Risotto",
      chef: {
        firstName: "Sarah",
        lastName: "Garcia",
        numberOfRecipes: 1,
      },
      ingredients: [
        "1 cup Arborio rice",
        "4 cups chicken or vegetable broth",
        "2 cups mushrooms (cremini, shiitake, etc.), sliced",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1/2 cup dry white wine (optional)",
        "1/2 cup grated Parmesan cheese",
        "2 tablespoons butter",
        "2 tablespoons olive oil",
        "Salt and pepper to taste",
        "Fresh parsley for garnish",
      ],
      instructions: [
        "In a saucepan, heat chicken or vegetable broth over low heat and keep it warm.",
        "In a separate large skillet, heat olive oil over medium heat.",
        "Add chopped onions and minced garlic. Sauté until onions are translucent.",
        "Add Arborio rice to the skillet. Stir to coat the rice with oil.",
        "If using, pour in dry white wine and cook until it evaporates.",
        "Gradually add warm broth to the skillet, one ladleful at a time, stirring frequently. Allow each addition of broth to be absorbed before adding more.",
        "Add sliced mushrooms to the skillet when the rice is almost cooked.",
        "Continue adding broth and stirring until the rice is creamy and tender, but still slightly firm to the bite (al dente).",
        "Stir in grated Parmesan cheese and butter. Season with salt and pepper to taste.",
        "Serve hot, garnished with fresh parsley.",
      ],
      time: "40 minutes",
      level: "Intermediate",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      title: "Lemon Garlic Roast Chicken",
      chef: {
        firstName: "William",
        lastName: "Martinez",
        numberOfRecipes: 1,
      },
      ingredients: [
        "1 whole chicken (about 2 kg)",
        "2 lemons, halved",
        "4 cloves garlic, minced",
        "2 tablespoons olive oil",
        "1 tablespoon dried thyme",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat oven to 200°C (400°F).",
        "Pat the chicken dry with paper towels. Season the cavity with salt and pepper.",
        "Place halved lemons and minced garlic inside the cavity of the chicken.",
        "Rub olive oil all over the chicken. Season generously with salt, pepper, and dried thyme.",
        "Tie the chicken legs together with kitchen twine.",
        "Place the chicken on a roasting pan, breast side up.",
        "Roast in the preheated oven for 1 hour and 20 minutes, or until the juices run clear and the skin is golden brown.",
        "Remove from the oven and let it rest for 10-15 minutes before carving.",
        "Serve hot, garnished with fresh herbs if desired.",
      ],
      time: "1 hour 30 minutes",
      level: "Intermediate",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      title: "Vegetarian Chili",
      chef: {
        firstName: "Emma",
        lastName: "Lopez",
        numberOfRecipes: 1,
      },
      ingredients: [
        "2 cans (400g each) kidney beans, drained and rinsed",
        "1 can (400g) black beans, drained and rinsed",
        "1 can (400g) diced tomatoes",
        "1 cup vegetable broth",
        "1 onion, chopped",
        "2 bell peppers, diced",
        "2 cloves garlic, minced",
        "2 tablespoons chili powder",
        "1 teaspoon cumin",
        "1 teaspoon paprika",
        "Salt and pepper to taste",
        "2 tablespoons olive oil",
      ],
      instructions: [
        "In a large pot, heat olive oil over medium heat.",
        "Add chopped onions, diced bell peppers, and minced garlic. Sauté until vegetables are softened.",
        "Stir in chili powder, cumin, and paprika. Cook for another minute.",
        "Add diced tomatoes, kidney beans, black beans, and vegetable broth to the pot.",
        "Bring the chili to a simmer. Cover and cook for 20-25 minutes, stirring occasionally.",
        "Season with salt and pepper to taste.",
        "Serve hot, optionally garnished with shredded cheese, sour cream, and chopped cilantro.",
      ],
      time: "40 minutes",
      level: "Easy",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 8,
      title: "Homemade Pizza",
      chef: {
        firstName: "Olivia",
        lastName: "Brown",
        numberOfRecipes: 1,
      },
      ingredients: [
        "1 pizza dough (store-bought or homemade)",
        "1/2 cup pizza sauce",
        "1 1/2 cups shredded mozzarella cheese",
        "Assorted toppings (pepperoni, mushrooms, bell peppers, onions, etc.)",
        "2 tablespoons olive oil",
        "1 tablespoon dried oregano",
        "1 teaspoon garlic powder",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat oven to 220°C (425°F).",
        "Roll out pizza dough on a lightly floured surface to desired thickness.",
        "Transfer the rolled-out dough to a baking sheet or pizza pan.",
        "Spread pizza sauce evenly over the dough, leaving a small border around the edges.",
        "Sprinkle shredded mozzarella cheese over the sauce.",
        "Arrange desired toppings over the cheese.",
        "Drizzle olive oil over the toppings. Sprinkle dried oregano, garlic powder, salt, and pepper over the pizza.",
        "Bake in the preheated oven for 15-20 minutes, or until the crust is golden brown and the cheese is bubbly.",
        "Remove from the oven and let it cool for a few minutes before slicing.",
        "Serve hot, with additional toppings if desired.",
      ],
      time: "25 minutes",
      level: "Easy",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 9,
      title: "Vegetable Lasagna",
      chef: {
        firstName: "Daniel",
        lastName: "Gonzalez",
        numberOfRecipes: 1,
      },
      ingredients: [
        "9 lasagna noodles, cooked according to package instructions",
        "2 cups marinara sauce",
        "2 cups ricotta cheese",
        "2 cups shredded mozzarella cheese",
        "2 cups assorted vegetables (zucchini, bell peppers, mushrooms, spinach, etc.), sliced",
        "1 onion, chopped",
        "3 cloves garlic, minced",
        "2 tablespoons olive oil",
        "Salt and pepper to taste",
        "Fresh basil for garnish",
      ],
      instructions: [
        "Preheat oven to 180°C (350°F).",
        "In a skillet, heat olive oil over medium heat.",
        "Add chopped onions and minced garlic. Sauté until onions are translucent.",
        "Add assorted vegetables to the skillet. Sauté until vegetables are tender.",
        "Spread a thin layer of marinara sauce on the bottom of a 9x13-inch baking dish.",
        "Arrange cooked lasagna noodles over the sauce.",
        "Spread ricotta cheese over the noodles. Top with sautéed vegetables and shredded mozzarella cheese.",
        "Repeat the layers until all ingredients are used, ending with a layer of shredded mozzarella cheese on top.",
        "Cover the baking dish with aluminum foil and bake in the preheated oven for 30 minutes.",
        "Remove the foil and bake for an additional 10-15 minutes, or until the cheese is melted and bubbly.",
        "Let it cool for a few minutes before slicing.",
        "Serve hot, garnished with fresh basil.",
      ],
      time: "1 hour 15 minutes",
      level: "Intermediate",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 10,
      title: "Chocolate Chip Cookies",
      chef: {
        firstName: "Sophia",
        lastName: "Hernandez",
        numberOfRecipes: 1,
      },
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1/2 teaspoon salt",
        "1 cup unsalted butter, softened",
        "3/4 cup granulated sugar",
        "3/4 cup packed brown sugar",
        "1 teaspoon vanilla extract",
        "2 large eggs",
        "2 cups semisweet chocolate chips",
        "1 cup chopped nuts (optional)",
      ],
      instructions: [
        "Preheat oven to 190°C (375°F).",
        "In a small bowl, combine flour, baking soda, and salt. Set aside.",
        "In a large mixing bowl, beat softened butter, granulated sugar, brown sugar, and vanilla extract until creamy.",
        "Add eggs, one at a time, beating well after each addition.",
        "Gradually add the flour mixture to the butter mixture, beating well until combined.",
        "Stir in chocolate chips and chopped nuts, if using.",
        "Drop rounded tablespoonfuls of dough onto ungreased baking sheets.",
        "Bake in the preheated oven for 9-11 minutes, or until golden brown.",
        "Cool on baking sheets for 2 minutes before transferring to wire racks to cool completely.",
        "Store cookies in an airtight container.",
      ],
      time: "25 minutes",
      level: "Easy",
      image: "https://via.placeholder.com/300",
    },
  ]);
  useEffect(() => {}, []);
  // console.log(recipes)
  return (
    <section className="recipeList pt-3">
      <Container maxWidth="xl">
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          marginBottom={3}
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay={1240}
        >
          Recipes
          <span className="line"></span>
        </Typography>
        <Grid container component="main" sx={{ mt: "30px" }}>
          {recipes.map((recipe) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={1200}
              key={recipe.id}
            >
              <Card className="recipeCard">
                <CardMedia
                  component="img"
                  image={recipe.image}
                  alt="random"
                  className="cardMedia"
                />
                <CardContent sx={{ flexGrow: 1 }} className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    {recipe.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h6">
                    {recipe.chef.firstName} {recipe.chef.lastName}
                  </Typography>
                  <Typography gutterBottom variant="span" component="span">
                    {recipe.time}
                  </Typography>
                  <Typography>
                    {truncateText(recipe.instructions.join(" "))}
                  </Typography>{" "}
                  <Button
                    size="medium"
                    sx={{ bgcolor: "custom.orange", color: "black" }}
                    className="addtocartbtn"
                  >
                    view recipe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default RecipeList;
