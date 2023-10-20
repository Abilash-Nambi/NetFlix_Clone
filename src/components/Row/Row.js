import React, { useEffect } from "react";
import axios from "../../axios";
import { useState } from "react";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerPath, setTrailerPath] = useState("");
  const [description, setDescription] = useState("");
  const [titles, setTitles] = useState("");
  const [error, setError] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);

      setMovies(response.data.results);
    };
    fetchData();
    //console.log(movies);
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerPath === "") {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title
      )
        .then((response) => {
          const path = response.split("?v=")[1];
          setTrailerPath(path);
          setDescription(movie?.overview);
          setTitles(movie?.name || movie?.title);
        })
        .catch((error) => {
          setError(true);
          console.log(error);
        });
    } else {
      setTrailerPath("");
      setDescription("");
      setTitles("");
    }
  };

  const opts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLarge && "row_posterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerPath && (
        <div className="info__overlay" onClick={() => handleClick(null)}>
          <div className="info__overlay--contentBox">
            <div class="info__video-responsive">
              <YouTube videoId={trailerPath} opts={opts} />
            </div>
            <div>
              <h1>{titles}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="info__error" onClick={() => setError(false)}>
          <div className="info__error--content">
            <div>
              <h1>Trailer Not available..</h1>
              <p>Please try another movie</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Row;
