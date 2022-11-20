import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  async function fetchData() {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
    return request;
  }

  useEffect(() => {
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
      <div className="banner__contents">
        <h1 className="movie__name">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>
      <div className="banner__fadebottom" />
    </header>
  );
}

export default Banner;
