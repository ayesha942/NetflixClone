import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom'; // ✅ Import Link

const TitleCards = ({ title = "Movies", category = "now_playing" }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUzZDA3ZWNmNGM5OGYxYWZiOGQxY2FlZDkxZTM1NyIsIm5iZiI6MTc1MDQzOTE1My4yNzQsInN1YiI6IjY4NTU5NGYxNjdiYzFjMzRkMGNjMjg2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vR9-D2_RX5TgRtT62bkUaXt8pQSTwMPjsax-STShIU'
    }
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        setApiData(data.results || []);
      })
      .catch(err => console.error(`Error fetching ${category} movies:`, err));

    const handleWheel = (event) => {
      event.preventDefault();
      if (cardsRef.current) {
        cardsRef.current.scrollLeft += event.deltaY;
      }
    };

    const ref = cardsRef.current;
    if (ref) ref.addEventListener('wheel', handleWheel);

    return () => {
      if (ref) ref.removeEventListener('wheel', handleWheel);
    };
  }, [category]);

  return (
    <div className='titlecards'>
      <h2>{title}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((movie, index) => (
          <Link to={`/player/${movie.id}`} className='card' key={index}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : '/placeholder.jpg'
              }
              alt={movie.title || movie.name}
            />
            <p>{movie.title || movie.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
