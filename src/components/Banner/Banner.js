import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";

function Banner({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);

      const randomIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      const randomMovie = response.data.results[randomIndex];

      setMovies(randomMovie);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const truncate = (string, n) => {
    return string && string.length > n
      ? string.substring(0, n - 1) + "..."
      : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movies.title || movies.name || movies.orginal_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movies.overview, 150)}</h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
}

export default Banner;
