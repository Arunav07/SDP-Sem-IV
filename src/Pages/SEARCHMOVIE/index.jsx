import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../../Components/Search";
import { connect, useDispatch } from "react-redux";
import "./index.css";
import moment from "moment";
import { searchMovieRequest } from "../../store/Actions";
import { get } from "lodash";

const Index = ({ Searched }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const movieName = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [movie, setMovie] = React.useState(Searched?.results);

  useEffect(() => {
    setMovie(movieName);
    dispatch(searchMovieRequest(movieName));
    return()=>{
      window.scrollTo(0,0);
    }
  }, [movieName, dispatch]);
  Searched?.sort((a, b) => (a?.release_date > b?.release_date ? 1 : -1));
  return (
    <div className="SearchPage">
      <Typography variant="h4">Search Movie</Typography>
      <SearchBar param={movie} />
      <div className="MoviesResult">
        {Searched &&
          Searched?.map((movie1, index) => {
            return (
              <div
                key={index}
                className="movieCard"
                onClick={() => {
                  navigate("/movie/" + movie1?.id);
                }}
              >
                <img
                  src={
                    movie1?.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie1.poster_path}`
                      : "https://cdn.dribbble.com/users/634336/screenshots/2246883/media/21b6eeac8c36a79c6b4b2a1930bd89a6.png"
                  }
                  alt="poster"
                />
                <div className="movieCard-info">
                  <h3>{movie1?.title}</h3>
                  <p>
                    {movie1.overview.length > 200
                      ? movie1?.overview.substring(0, 200) + `...`
                      : movie1?.overview}
                  </p>
                  <p>{moment(movie1?.release_date).format("ll")}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Searched: get(state, "FetchMovieReducer.SearchMovies", []),
  };
};

export default connect(mapStateToProps)(Index);
