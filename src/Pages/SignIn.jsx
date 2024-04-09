import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
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
import { useLocation } from 'react-router-dom';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);
  const [notification, setNotification] = useState(null);
  const location = useLocation();
  const scrollRef = useRef(null);

  console.log(status)
  useEffect(() => {
    if (status === "Successful") {
      setNotification(
        <Alert severity="success" sx={{ mt: 4 }}>
          Your login was successful!
        </Alert>
      );
      setNotification(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [status, navigate, dispatch]);

  useLayoutEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTo(0, 0);
    }
}, [location.pathname]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    if (status === "failed") {
      setNotification(
        <Alert severity="error" sx={{ mt: 4 }}>
          {status === "failed"
            ? "Email or password are wrong. Try Again!"
            : "User not found. Please sign up."}
        </Alert>
      );
      
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } 
    if (status === "Successful") {
      setNotification(
        <Alert severity="success" sx={{ mt: 4 }}>
          Your login was successful!
        </Alert>
      );
      setNotification(true);
    }
  };

  const handleSignUp = (e) => {
    navigate("/signup");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
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
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link href="" variant="body2" onClick={handleSignUp}>
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
