import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, rating }) => (
  <div className="card">
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>Rating: {rating}</p>
    <Link to={`/reviews/${id}`}>View Reviews</Link>
  </div>
);

export default Card;
