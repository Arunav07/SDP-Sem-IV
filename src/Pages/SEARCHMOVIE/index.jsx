import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import SearchBar from "../../Components/Search";
import { searchTMDB } from "../../Services/SearchTMDB";
import "./index.css"
import moment from "moment";
const Index = () => {
  const location = useLocation();
  const movieName = location.pathname.split("/")[2];
  const [movie, setMovie] = React.useState(localStorage.getItem("Movies"));
  useEffect(() => {
    setMovie(movieName);
    searchTMDB(movieName).then((data) => {
        localStorage.setItem("Movies", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieName, movie]);

  let Searched = JSON.parse(localStorage.getItem("Movies"));
  Searched = Searched?.res?.results
Searched.sort((a, b) => a.release_date > b.release_date ? 1 : -1);
  return (
    <div className="SearchPage">
      <Typography variant="h4">Search Movie</Typography>
      <SearchBar param={movie} />
      <div className="MoviesResult">
        {Searched &&
          Searched?.map((movie1, index) => {
            return <div key={index} className="movieCard">
                <img src={"https://cdn.dribbble.com/users/634336/screenshots/2246883/media/21b6eeac8c36a79c6b4b2a1930bd89a6.png" && `https://image.tmdb.org/t/p/w500/${movie1.poster_path}` } alt="poster" />
                <div className="movieCard-info">
                    <h3>{movie1?.title}</h3>
                    <p>{movie1.overview.length>200? movie1?.overview.substring(0,200)+`...`: movie1?.overview}</p>
                    <p>{moment(movie1?.release_date).format("ll")}</p>
                </div>
            </div>;
          })}
      </div>
    </div>
  );
};

export default Index;
