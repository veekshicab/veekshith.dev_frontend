
import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { render } from '@testing-library/react';
function App() {


  return (
    

    <div  >

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </Router>

      </div>
  

  );
}

export default App;
