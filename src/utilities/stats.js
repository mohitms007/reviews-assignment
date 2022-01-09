import reviews from "../reviews.json";

export const getAverageRating = () => {
  const sum_of_ratings = reviews
    .map((review) => review.overall)
    .reduce((prev, next) => prev + next);

  return parseInt(sum_of_ratings / 5);
};

export const getTotalReviews = () => {
  return reviews.length;
};

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