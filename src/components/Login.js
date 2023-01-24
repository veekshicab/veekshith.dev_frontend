import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";
import { Box } from "@mui/system";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from 'notistack';


const Homepage = () => {



  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const validateInput = (data) => {
    const response = {
      flag: false,
      message: "",
    };
    if (!data.email) {
      response.message = "email is a required field";
    } else if (!data.password) {
      response.message = "Password is a required field";
    } else {
      response.flag = true;
      response.message = "Validation Succesfull";
    }
    return response;
  };

  const persistLogin = (token, email, balance) => {
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    localStorage.setItem("balance", balance);
    localStorage.setItem("isLoggedIn", true);
  };
  let  config = {
    endpoint: `http://3.111.223.78:8082`,
  };




  const login = async (formData) => {
    try {
      formData = { email: email, password: password };
      const validationResult = validateInput(formData);
      if (validationResult.flag) {
        const url = `${config.endpoint}/v1/auth/login`
        const response = await axios.post(url, formData);

        if (response.status === 200) {
          const userDetails = response.data;
          persistLogin(
            userDetails.tokens.access.token,
            userDetails.user.email,
            userDetails.user.walletMoney
          );
          enqueueSnackbar("Logged in successfully");
          // let path = `/`;
          // navigate.push(`/`);
        }
      } else {
        alert(validationResult.message);
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON."
        );
      }
      if (error.response === undefined) {
        alert(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON."
        );
      }
    }
  };





  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header />
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Login</h2>
          <TextField
            id="email"
            label="email"
            variant="outlined"
            title="email"
            name="email"
            placeholder="Enter email"
            fullWidth
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            id="password"
            variant="outlined"
            label="password"
            name="password"
            type="password"
            fullWidth
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="button" variant="contained" onClick={login} >
            LOGIN TO QKART
          </Button>
          <p className="secondary-action">
            Don't have an account?{" "}
            <Link className="link" to="/register">
              Register now
            </Link>
          </p>
        </Stack>
      </Box>
      <Footer />
    </Box>
    
  );







}




export default Homepage;