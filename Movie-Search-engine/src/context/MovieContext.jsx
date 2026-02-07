import { createContext,useState,useContext,useEffect } from "react";

const MovieContext = createContext()

export const UseMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) =>{
   
   const [Favorites,setFavorites] = useState([])

   useEffect(()=>{
    const storefavs = localStorage.getItem("favorites")
    if(storefavs){
        setFavorites(JSON.parse(storefavs))
    }
   },[])
   useEffect(()=>{
    localStorage.setItem("favorites",JSON.stringify(Favorites))
   },[Favorites]) //Only runs when a favorite is added or eliminated 

   const addtoFavorites =(movie) =>{
    setFavorites(prev => [...prev , movie])
   }
   const removefavorites = (MovieId) =>{
    setFavorites (prev => prev.filter(movie => movie.id !== MovieId))
   }
   const isFavorite = (movieId) =>{
    return Favorites.some(movie => movie.id===movieId)
   }

   const value = {
    Favorites,
    addtoFavorites,
    removefavorites,
    isFavorite
   }


   return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>

}