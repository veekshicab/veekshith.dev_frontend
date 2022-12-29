
import { Avatar, Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";

const Header = () => {
        const navigate = useNavigate();
        return (
                <Box className="header">
                        <Box>
                                <h3>Qkart</h3>
                        </Box>
                        <Box>
                                <Stack direction="row" spacing={2}>
                                        <Button>Login</Button>
                                        <Button>Register</Button>

                                </Stack>
                        </Box>
                </Box>

        );
};

export default Header;
