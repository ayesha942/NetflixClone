import React, { useEffect, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';

const TitleCards = ({title,category}) => {

  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY; // Use correct property
    }
  };

  useEffect(() => {
    const ref = cardsRef.current;
    if (ref) {
      ref.addEventListener('wheel', handleWheel);
    }

    // Clean up
    return () => {
      if (ref) {
        ref.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className='card' key={index}>
            <img src={card.image} alt={`Card ${index}`} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
