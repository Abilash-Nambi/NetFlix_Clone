import React from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../../request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner title="Trending Now" fetchUrl={requests.fetchNetFlixOrginals} />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLarge={true}
      />
      <Row title="Top Rated" fetchUrl={requests.netFlixTopRated} />
      <Row title="Action  Movies" fetchUrl={requests.netFlixActionMovies} />
      <Row title="Trending Now" fetchUrl={requests.netFlixComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.netFlixHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.netFlixRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.netFlixDocumentaries} />
    </div>
  );
}

export default HomeScreen;
