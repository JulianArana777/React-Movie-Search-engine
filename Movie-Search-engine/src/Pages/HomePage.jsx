import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard"
import { getPopularMovies, getSearchMovies } from "../Services/Api"
import '../css/Home.css'

function Home() {

    const HandleSearch = async (e) => {
        e.preventDefault();
        if(!searchquery.trim())return
        if(loading)return
        setLoading(true)
        try{
            const searchmov = await getSearchMovies(searchquery)
            setMovies(searchmov)
            seterror(null)
        }catch (err){
            console.log(err)
            seterror("failed to search movies ...")
        }finally{setLoading(false)}

        
    }
    const [searchquery, setsearchquery] = useState("");
    const [movies, setMovies] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);



    return (


        <div className="home">
            <form onSubmit={HandleSearch} className="search-form">
                <input type="text" placeholder="Search for movie"
                    className="search-input" value={searchquery} onChange={(e) => setsearchquery(e.target.value)} />

                <button className="search-button" type="submit" > Search </button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}

        </div>
    )
}
export default Home;