const API_KEY = "8ac7b2f60a930af4221584a7fdc3b9c8"
const BASE_URL = "https://api.themoviedb.org/3";

export const  getPopularMovies = async() =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}
export const  getSearchMovies = async(query) =>{
      const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
    const data = await response.json()
    return data.results
}