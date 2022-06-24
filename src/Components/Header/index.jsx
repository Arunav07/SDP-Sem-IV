import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { AppBar, Button,  Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Movie } from "../../assets";
import "./header.css"
import SearchBar from "../Search";


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const movieName = location.pathname.split("/")[2];
  const [movie, setMovie] = React.useState(null);

  useEffect(()=>{
      setMovie(movieName);
  },[movieName]);

  return (
      <Box>
      <AppBar position="static" className="header">
        <Toolbar style={{justifyContent: "space-between", flexWrap: "wrap"}}>
       <Button onClick={()=>navigate("/")}>
            <img src={Movie} id="header-logo" alt="google logo" />
            <h1 id="header-title">Movie Recommender System</h1>
       </Button>
       <SearchBar param={movie}/>
          </Toolbar>
      </AppBar>
      </Box>
  );
}
