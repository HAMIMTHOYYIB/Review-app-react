import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css'

const PhoneReviewPage = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Load reviews from local storage
  useEffect(() => {
    const storedReviews = localStorage.getItem(`reviews-${id}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, [id]);

  // Save reviews to local storage
  useEffect(() => {
    localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
  }, [reviews, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, review, rating };
    setReviews([...reviews, newReview]);
    setName('');
    setReview('');
    setRating(0);
    setShowReviewForm(false);
  };

  return (
    <div>
      <Header />
      <div className="phone-review">
        <div className="phone-details">
          <p>Heresome details about Phone</p>
        </div>
        <button onClick={() =>showReviewForm?setShowReviewForm(false):setShowReviewForm(true)}>Add Review</button>
        {showReviewForm && (
          <form onSubmit={handleSubmit} className="review-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
            <input
              type="number"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              min="1"
              max="5"
              required
            />
            <button type="submit">Submit Review</button>
          </form>
        )}
        <div className="reviews">
          {reviews.map((rev, index) => (
            <div key={index} className="review">
              <h3>{rev.name}</h3>
              <p>{rev.review}</p>
              <p>Rating: {rev.rating}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhoneReviewPage;
