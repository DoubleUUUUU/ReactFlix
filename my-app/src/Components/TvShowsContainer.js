import React, { useEffect, useState } from "react";
import TvShows from "./TvShows";
import { Link } from "react-router-dom";

export default function TvShowsContainerContainer() {
    const [tvshowss, setTvShows] = useState([]);
    const Images = 'https://image.tmdb.org/t/p/w500/';
    const [filteredTvShows, setFilteredTvShows] = useState([]);
    const apiKey = 'edb700408916fa69b61673de6f967e2d';


    useEffect(() => {
        const searchUrl = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
       // const searchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent("A")}`;
        fetch(searchUrl)
            .then((res) => res.json())
            .then((data) => {
                setTvShows(data)
                setFilteredTvShows(data.results);
                console.log(data);
            })
            .catch(error => console.error('Error fetching searching results:', error));
    }, []);

    
    const filterTvShow = (filter) => {
        if (filter === ''){
            setFilteredTvShows(tvshowss.results);
        }
        else
        {
            const searchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(filter)}`;
            fetch(searchUrl)
                .then((res) => res.json())
                .then((data) => {
                    setFilteredTvShows(data.results);
                    tvshowss(data.results);
                })
                .catch(error => console.error('Error fetching searching results:', error));
        }
    }



    return (
        <div>
            <div className="fixed top-0 left-0 right-0 z-10 border mb-5 bg-gray-300 w-full h-20 p-5 flex items-center justify-between">
                <div className="flex">
                    <h1 style={{color:'red', fontSize: '28px'}} className="font-bold">React</h1><h1 style={{color:'black', fontSize: '28px'}} className="font-bold">Flix</h1>
                    <div style={{color:'black', fontSize: '22px'}} className="flex">
                        <Link className="ml-5 mt-1" to="/">Movies</Link>
                        <Link className="ml-5 mt-1" to="TvShows">TvShows</Link>
                    </div>

                </div>
                
               

                <input
                    className="border p-2 rounded-lg border-left-500"
                    type="text"
                    placeholder="Search..."
                    onChange={(el) => {
                      //  console.log(el.target.value);
                        filterTvShow(el.target.value);
                    }}
                />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 p-8 pt-32 mb-10 border p-5 rounded-lg">
                {filteredTvShows.map(show => {
                    return (
                        <div key={show.id}>
                            <TvShows imageUri={Images + show.poster_path} title={show.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}