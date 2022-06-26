import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { fetchMovieRequest } from "../../store/Actions";
import { get } from "lodash";
import "./index.css"
import {Typography} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import moment from "moment"
const Movie = ({ Movie }) => {
  const location = useLocation();
  const movieID = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieRequest(movieID));
  }, [movieID, dispatch]);

  Movie = Array(Movie)[0];
  let intRating = Math.floor(Movie?.vote_average)

var array = []
const Func = () =>{
  for(let i=0;i<intRating;i++){
    array.push(i)
  }
}
Func();

return (
    <div className="MoviePage">
      <img
        src={
          Movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500/${Movie?.poster_path}`
            : "https://cdn.dribbble.com/users/634336/screenshots/2246883/media/21b6eeac8c36a79c6b4b2a1930bd89a6.png"
        }
        alt="poster"
        className="movie_openImage"
      />
      <div className="movieInfo">
        <div className="topDiv">
          <h3>{moment(Movie?.release_date).format("ll")}</h3>
          <div className="">
            <h2 style={{"display": "flex", "alignItems": "center"}}>Rating: &nbsp;
              {array?.map((entry, index)=>(
                <StarIcon style={{color: "rgb(245, 197, 24)", marginLeft: "1%"}} key={index}/>
              ))}{Movie?.vote_average!==0? <StarHalfIcon style={{color: "rgb(245, 197, 24)"}}/>: null}<pre>{Number(Movie?.vote_average).toFixed(2)}/10</pre></h2>
          </div>
        </div>
        <Typography variant="body1">
          {Movie?.overview}
        </Typography>
        <h3>Total Runtime: {Math.floor(Movie?.runtime/60)} Hr {Movie?.runtime%60} Mins</h3>
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
