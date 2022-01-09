import reviews from "../reviews.json";



// Get average review rating of the product
export const getAverageRating = () => {
  const sum_of_ratings = reviews
    .map((review) => review.overall)
    .reduce((prev, next) => prev + next);

  return parseInt(sum_of_ratings / 5);
};

export const getTotalReviews = () => {
  return reviews.length;
};


// Get how many percentage of users liked the product
export const getUserLiked = () => {
  const usersLiked = reviews
    .map((review) => {
      if (review.overall >= 4) {
        return 1;
      }
      return 0;
    })
    .reduce((prev, next) => prev + next);

    return parseInt((usersLiked/reviews.length) * 100)
};



// get one star reviews in the product
export const getOneStarRatings = () => {
  const usersDisLiked = reviews
    .map((review) => {
      if (review.overall === 1) {
        return 1;
      }
      return 0;
    })
    .reduce((prev, next) => prev + next);

    return parseInt(usersDisLiked)
  }