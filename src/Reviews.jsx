import React, { useState, useEffect, useRef } from 'react';
import './Reviews.css';
import ReviewForm from './ReviewForm';

const Reviews = ({ reviewsReload, setreviewsReload }) => {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]); 
  const apiUrl = import.meta.env.VITE_API_URL; 
  const [visibleReviews, setVisibleReviews] = useState(3); // State to track how many reviews to show

  // Create a ref for the review heading
  const reviewHeadingRef = useRef(null);

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch(`${apiUrl}/reviews`);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Fetch reviews when the component mounts or reviewsReload changes
  useEffect(() => {
    fetchReviews();

    if (reviewsReload) {
      setreviewsReload(false); // Reset the state
      setShowForm(false); // Hide the form

      // Scroll to the review heading
      if (reviewHeadingRef.current) {
        reviewHeadingRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [reviewsReload]);

  const handleWriteReviewClick = () => {
    setShowForm(!showForm);
  };

  // Function to mask the last 8 characters of the email
  const maskEmail = (email) => {
    const emailParts = email.split('@');
    const localPart = emailParts[0];
    const domain = emailParts[1];

    if (localPart.length > 8) {
      const visibleStart = localPart.slice(0, 3);
      const visibleEnd = localPart.slice(-3);
      return `${visibleStart}********${visibleEnd}@${domain}`;
    }

    return email;
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  // Function to load more reviews by incrementing the visible reviews count by 3
  const handleLoadMore = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
  };

  return (
    <>
      <div className='Review-Heading' ref={reviewHeadingRef}>
        <h2>
          What people think <span className='Colour-change'>About us</span>
        </h2>
      </div>

      <div>
        {/* Display fetched reviews */}
        <div className='reviews-list'>
          {reviews.length > 0 ? (
            reviews.slice(0, visibleReviews).map((review) => (
              <div key={review.id || review._id} className='review-item'>
                <h4>{review.name}</h4>
                <p id='Review-mail'>{maskEmail(review.email)}</p>
                <p className='review-date'>{formatDate(review.createdAt)}</p>
                <p id='Review-Msg'>{review.review}</p>
                
                {review.photos && review.photos[0] && (
                  <img src={review.photos[0]} alt='review' />
                )}
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>

        {/* Load more button */}
        {visibleReviews < reviews.length && (
          <div className='load-more-button'>
            <span className='load-more' onClick={handleLoadMore}>
              LOAD MORE
            </span>
          </div>
        )}
      </div>

      <div className='write-review-button'>
        <span className='write-review' onClick={handleWriteReviewClick}>
          WRITE A REVIEW
        </span>
      </div>

      {/* Conditionally show the review form */}
      {showForm && <ReviewForm setreviewsReload={setreviewsReload} />}
    </>
  );
};

export default Reviews;
