import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const restaurantsReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    console.log(restaurantsReviews)
    return (
      <ul>
        Reviews
      </ul>
    );
  }
};

export default Reviews;