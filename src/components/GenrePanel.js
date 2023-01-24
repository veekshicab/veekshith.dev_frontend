



import { Avatar, Button, Stack, TextField, ToggleButton, Grid, Select, MenuItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import "./GenrePanel.css";

const GenrePanel = () => {

  let [sort, setSort] = useState("Sort")

  const history = useNavigate();
  const Genres = [
    { label: "All Genre", value: "All" },
    { label: "Education", value: "Education" },
    { label: "Sports", value: "Sports" },
    { label: "Comedy", value: "Comedy" },
    { label: "Lifestyle", value: "Lifestyle" },
    { label: "Movies", value: "Movies" },
  ];

  const ContentRatings = [
    { label: "Any Age Group", value: "Anyone" },
    { label: "7+", value: "7+" },
    { label: "12+", value: "12+" },
    { label: "16+", value: "16+" },
    { label: "18+", value: "18+" },
  ];

  const ColorButton = styled(ToggleButton)({
    textTransform: "capitalize",
    color: "#ffffff",
    fontsize: "1.5rem",
    background: "none",
    border: "none",
    height: "2rem",
    borderRadius: "16px",
    boxShadow: "none",
    fontWeight: "400",
    backgroundColor: "#424242",
    "&.Mui-selected:hover": {
      backgroundColor: "#ededed",
      color: "#586069",
      borderRadius: "16px",
    },
    "&.Mui-selected": {
      backgroundColor: "#eceff1",
      color: "#eceff1",
      borderRadius: "16px",
    },
    "&:focus": {
      backgroundColor: "#eceff1",
      color: "#586069",
      borderRadius: "16px",
    },
  });


  const CustomSelect = styled(Select)({
    backgroundColor: "#eceff1",
    height: "2.2rem",
    borderRadius: "16px",
    color: "#212121",
    "&:focus": {
      borderColor: "#212121",
      border: "none",
      color: "#212121",
      backgroundColor: "#eceff1",
    },
  });


  return (
    <Box>

      <Box >

      <Stack spacing={1.5} direction="row" className="genrePanel" padding={2}>

        {Genres.map(genre => (<ColorButton
          style={{ borderRadius: 25, variant: "outlined" }}
        >
          {genre.value}
        </ColorButton>))}
        <CustomSelect
          defaultValue={"releaseDate"}
          // onChange={handleChange}
          IconComponent={""}
        >
          <MenuItem value={"releaseDate"}>Release Date</MenuItem>
          <MenuItem value={"viewCount"}>View Count</MenuItem>
        </CustomSelect>
      </Stack>

      </Box>

      <Box>
      <Stack spacing={1.5} direction="row" padding={2} className="genrePanel">
        {ContentRatings.map(rating => (<ColorButton
          style={{ borderRadius: 25, variant: "outlined" }}
        >
          {rating.value}
        </ColorButton>))}
      </Stack>

      </Box>

      </Box>

  );
};


export default GenrePanel
