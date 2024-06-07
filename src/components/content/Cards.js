import React from 'react';
import './Cards.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

function Cards({ date, title, text }) {

    const [liked, setLiked] = useState(false)

    function clicked (){

        setLiked(!liked)

    }


  return (
    <div className='cards'>
      <div className='firstline'>
          <p id="p1">{date}</p>
          <div onClick={clicked}>
          {liked ? <FaHeart color="#E07B67" /> : <FaRegHeart color="#E07B67" />} {/* Alterna entre o ícone preenchido e contornado */}
          </div>
      </div>
      <p id="p2">{title}</p>
      <p id='p3'>{text}</p>
    </div>
  );
}

export default Cards;
