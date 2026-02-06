import { useState } from "react";
import MovieCard from "../Components/MovieCard"

function Home() {

    const movies = [
        { id: 1, tittle: "Jhon Wick", release_date: "2025" },
        { id: 2, tittle: "The Matrix", release_date: "1999" },
        { id: 3, tittle: "Inception", release_date: "2010" },
        { id: 4, tittle: "Interstellar", release_date: "2014" },
        { id: 5, tittle: "The Dark Knight", release_date: "2008" },
        { id: 6, tittle: "Gladiator", release_date: "2000" },
        { id: 7, tittle: "Avengers: Endgame", release_date: "2019" },
        { id: 8, tittle: "Fight Club", release_date: "1999" },
        { id: 9, tittle: "Pulp Fiction", release_date: "1994" },
        { id: 10, tittle: "Mad Max: Fury Road", release_date: "2015" }
    ]
    const HandleSearch = (e) =>{
        e.preventDefault();
        alert(searchquery)
    }
    const [searchquery,setsearchquery] = useState(" ");



    return (


        <div className="home">
            <form onSubmit={HandleSearch} className="search-form">
                <input type="text" placeholder="Search for movie" 
                className="search-input" value={searchquery} onChange={(e) => setsearchquery(e.target.value)}  />

                <button className="search-button" type="submit" > Search </button>
                 </form>
            <div className="movie-grid">
                {movies.map(movie => 
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                )}
            </div>

        </div>
    )
}
export default Home;