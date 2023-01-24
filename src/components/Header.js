
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";

const Header = () => {

  const history = useNavigate();
  

  return (
    <Box className="header">
      <Box className="header-title">
        <span className="red">X</span>Flix
      </Box>
      <Box className="searchBar">
        <TextField
          variant="outlined"
          id="outlined-basic"
          size="small"
          placeholder="Search"
          name="search"
        />
      </Box>
      <Box>
        <Button>Upload</Button>
      </Box>

    </Box>
  );
};


export default Header