import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { fetchMovieRequest } from "../../store/Actions";
import { get } from "lodash";
import "./index.css"
import {Typography} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import moment from "moment"
import { useState } from "react";
const Movie = ({ Movie }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const movieID = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieRequest(movieID));
  }, [movieID]);

  Movie = Array(Movie)[0];
  let intRating = Math.floor(Movie?.vote_average)

const StarFunction = () =>{
  for(let i=0; i<intRating; i++) {
    return(
      <StarIcon />
    )
}}

  return (
    <div className="MoviePage">
      <img
        src={
          Movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500/${Movie?.poster_path}`
            : "https://cdn.dribbble.com/users/634336/screenshots/2246883/media/21b6eeac8c36a79c6b4b2a1930bd89a6.png"
        }
        alt="poster"
      />
      <div className="movieInfo">
        <div className="topDiv">
          <h2>{moment(Movie?.release_date).format("ll")}</h2>
          <div className="">
            <h2>Rating: {StarFunction()}<StarHalfIcon /></h2>
          </div>
        </div>
        <Typography variant="body1">
          {Movie?.overview}
        </Typography>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Movie: get(state, "FetchMovieReducer.Movie", {}),
  };
};

export default connect(mapStateToProps)(Movie);
