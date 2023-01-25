import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { render } from '@testing-library/react';
import ipConfig from "./ipConfig.json";
export const config = {
  endpoint: `https://7e01f22c-eb23-46c0-ab2c-f5cd65fff574.mock.pstmn.io/v1`,
};

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/vee' element={<LandingPage />} />
          {/* <Route path='/GenrePanel' element={<GenrePanel />} /> */}
        </Routes>
      </Router>
  );
}







export default App;


