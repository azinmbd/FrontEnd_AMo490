import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import signInBg from "../assets/siginin.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features//authSlice";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector((state) => state.auth.status);
  const [notification, setNotification] = useState(null); // Store the notification state

  useEffect(() => {
    if (status === "Successful") {
      setNotification(
        <Alert severity="success" sx={{ mt: 4 }}>
          Your login was successful!
        </Alert>
      );
      setTimeout(() => {
        navigate("/");
      }, 1000); // Navigate after 1 second
    } else if (status === 401 || status === 404) {
      setNotification(
        <Alert severity="error" sx={{ mt: 4 }}>
          {status === 401
            ? "Email or password are wrong. Try Again!"
            : "User not found. Please sign up."}
        </Alert>
      );
      setTimeout(() => {
        setNotification(null); // Clear the notification after a few seconds
      }, 5000);
    }
  }, [status, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ userEmail, userPassword }));
  };

  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        component={Paper}
        elevation={6}
        className="signInFormVector"
        height={"100%"}
        justifyContent="center"
        display={"flex"}
        boxShadow={"none"}
      >
        <Box
          sx={{
            my: 8,
            mx: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="w-75"
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userEmail"
                label="Email Address"
                name="userEmail"
                autoComplete="email"
                autoFocus
                value={userEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="userPassword"
                label="Password"
                type="password"
                id="userPassword"
                autoComplete="current-password"
                value={userPassword}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
            {notification}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={4}
        sx={{
          backgroundImage: `url(${signInBg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      />
    </Grid>
  );
};
export default SignIn;
