import '../css/Favorite.css'
import { UseMovieContext } from "../context/MovieContext"
import MovieCard from "../Components/MovieCard";
function Favorite (){
    const { Favorites } = UseMovieContext(); //Extract value
    if(Favorites){
        return (
            <div className='favorites'>
                <h2> Your Favorites </h2>
                <div className="movies-grid">
                    {Favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className="favorite-empty">
            <h2> No favorite Movies </h2>
            <p> Start Adding movies!!!</p>
        </div>
    )
}
export default Favorite;