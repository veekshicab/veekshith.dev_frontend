import Header from "./Header";
import Footer from "./Footer";
import "./Register.css";
import { Box } from "@mui/system";
import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from 'notistack';


const Register = () => {






    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            minHeight="100vh"
        >
            <Header />
            <Box className="content">
                <Box className="form" >
                    <Stack spacing={2}>
                        <Typography variant ="h2" className="title" color="primary">Register </Typography>
                  
                    <TextField
                        id="email"
                        label="email"
                        variant="outlined"
                        title="email"
                        name="email"
                        placeholder="Enter email"
                        fullWidth
                        value={"email"}
                    // onChange={(e) => setemail(e.target.value)}
                    />
                    <TextField
                        id="password"
                        variant="outlined"
                        label="password"
                        name="password"
                        type="password"
                        fullWidth
                        placeholder="Enter a password"
                        value={"password"}
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="button" variant="contained">
                        Register
                    </Button>
                    </Stack>
                </Box>

                
            </Box>
            <Footer />
        </Box>
    );







}




export default Register;