import React, { useEffect, useState } from 'react';
import './player.css';
import { useParams, useNavigate } from 'react-router-dom';
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = () => {
  const { id } = useParams(); // ✅ make sure () is used
  const navigate = useNavigate();

  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("Movie ID from URL:", id); // ✅ Debug log

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUzZDA3ZWNmNGM5OGYxYWZiOGQxY2FlZDkxZTM1NyIsIm5iZiI6MTc1MDQzOTE1My4yNzQsInN1YiI6IjY4NTU5NGYxNjdiYzFjMzRkMGNjMjg2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vR9-D2_RX5TgRtT62bkUaXt8pQSTwMPjsax-STShIU'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(data => {
        if (data?.results?.length > 0) {
          let trailer = data.results.find(
            video => video.site === 'YouTube' && video.type === 'Trailer'
          );
          if (!trailer) {
            trailer = data.results.find(video => video.site === 'YouTube');
          }

          if (trailer) {
            setApiData(trailer);
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      })
      .catch(err => {
        console.error("API error:", err);
        setError(true);
      });
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='Back' onClick={() => navigate(-1)} />

      {error ? (
        <p style={{ color: 'white', marginTop: '50px' }}>
          No trailer available for this movie.
        </p>
      ) : apiData ? (
        <>
          <iframe
            width='90%'
            height='60%'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title={apiData.name}
            allowFullScreen
          ></iframe>
          <div className='player-info'>
            <p>{apiData.published_at?.slice(0, 10) || 'Unknown Date'}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
        </>
      ) : (
        <p style={{ color: 'white', marginTop: '50px' }}>Loading...</p>
      )}
    </div>
  );
};

export default Player;
