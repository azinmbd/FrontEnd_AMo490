import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import "./styles/app.scss";

let persistor = persistStore(store);
const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  appearance: {
  },
};
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const theme = createTheme({
  palette: {
    secondary: {
      main: "#539165",
    },
    custom: {
      milk: "#F8F5E4",
      orange: "#FD6D0D",
      gray: "#525252",
      green: "#4F6C4E",
      blue: "#1C274D",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "orange",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          borderRadius: "150px",
        },
      },
    },
    MuiOutlinedInput: { 
      styleOverrides: {
        root: {
          borderRadius: 150,
        },
      },
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <Elements stripe={stripePromise} options={options}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        </Elements>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
