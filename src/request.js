const API_KEY = "api_key=17f6fff20a5a5abceb24c3ab35aee1ac";

const requests = {
  fetchTrending: `/trending/all/week?${API_KEY}&language=en-US`,
  fetchNetFlixOrginals: `/discover/tv?${API_KEY}&with_networks=213`,
  netFlixTopRated: `/movie/top_rated?${API_KEY}&language=en-US`,
  netFlixActionMovies: `/discover/movie?${API_KEY}&with_genres=28`,
  netFlixComedyMovies: `/discover/movie?${API_KEY}&with_genres=35`,
  netFlixHorrorMovies: `/discover/movie?${API_KEY}&with_genres=27`,
  netFlixRomanceMovies: `/discover/movie?${API_KEY}&with_genres=10749`,
  netFlixDocumentaries: `/discover/movie?${API_KEY}&with_genres=99`,
};

export default requests;
