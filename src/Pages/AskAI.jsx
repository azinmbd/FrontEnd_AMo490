import React, { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Footer from "../components/Footer";
import { fetchChatGptResponse } from "../redux/features/chatGptSlice";
import AskAIimg from "../assets/AskAIImg-01.svg";

export default function AskAI() {
  const location = useLocation();
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const responseData = useSelector((state) => state.chatGpt);
  const isLoading = useSelector((state) => state.chatGpt.isLoading);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
    const newMessage = { text: inputValue, sender: "user" };
    setMessages([...messages, newMessage]);
    setInputValue("");

    try {
      const response = await dispatch(fetchChatGptResponse(inputValue));
      console.log(response);
      if (response && response.payload && response.payload.responseData) {
        console.log(response.payload.responseData);
        const aiMessage = {
          text: `AI: ${responseData}`,
          sender: "ai",
        };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        console.error("Invalid response data structure:", response);
      }
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error);
    }
  };

  let chatContent;
  if (isLoading) {
    chatContent = (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={300}
      >
        <CircularProgress />
      </Box>
    );
  } else if (
    responseData &&
    responseData.responseData &&
    responseData.responseData.response
  ) {
    chatContent = (
      <div style={{ marginBottom: "10px", textAlign: "left" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          AI:
        </Typography>
        <Typography variant="body2" style={{ fontSize: "20px" }}>{` ${responseData.responseData.response}`}</Typography>{" "}
      </div>
    );
  } else {
    chatContent = (
      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <Typography variant="h6">
          Welcome! Ask me anything. Type your ingredients to get recipe ideas.
        </Typography>
        <img src={AskAIimg} alt="" width="20%" />
      </div>
    );
  }

  return (
    <React.Fragment>
      <section className="ChatSection">
        <Grid item xs={12} sx={{ pt: 15 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Ask AI
          </Typography>
        </Grid>
        <div className="replys">
          <Container maxWidth="xl">
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  textAlign: message.sender === "user" ? "right" : "left",
                }}
              >
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  {message.sender === "user" ? "You:" : "AI:"}{" "}
                </Typography>
                <Typography variant="body2" style={{ fontSize: "20px" }}>{message.text}</Typography>
              </div>
            ))}{" "}
            <hr />
            {chatContent}
          </Container>
        </div>
        <div className="chat">
          <Container maxWidth="xl">
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
                fullWidth
                label="Type your message here"
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button
                variant="contained"
                size="large"
                className="secondbtn"
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </Stack>
          </Container>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
