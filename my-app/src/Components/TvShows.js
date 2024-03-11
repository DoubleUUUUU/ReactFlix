import React, { useEffect, useState } from "react"
import Movies from "./Movies"

export default function MoviesContainer() {
  const [movie, setMovie] = useState([]);
  const Images = 'https://image.tmdb.org/t/p/w500/';
  const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=edb700408916fa69b61673de6f967e2d").then(
            (res) => 
                res.json().then((data) =>{
                    setMovie(data.results);
                    setFilteredMovies(data.results);
            })
            );
    }, []);

const filterMovie = (filter) =>{
    let filtered = movie.filter(film => film.title.toLowerCase().includes(filter.toLowerCase()));
    setFilteredMovies(filtered);
}

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 z-10 border mb-5 bg-gray-300 w-full h-20 p-5 flex items-center justify-between">
                <h1 className="font-bold">ReactFlix</h1>
                <input
                    className="border p-2 rounded-lg"
                    type="text"
                    placeholder="Search..."
                    onChange={(el) => {
                        console.log(el.target.value);
                        filterMovie(el.target.value);
                    }}
                />
            </div>
        
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-8 pt-32">
                {filteredMovies.map(film => {
                    return (
                        <div key={film.id}>
                            <Movies imageUri={Images + film.poster_path} title={film.title}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}