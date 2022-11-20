import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      {/* Nav */}
      <Banner />
      {/*Banner*/}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />

      {/*Row*/}
    </div>
  );
}

export default HomeScreen;
