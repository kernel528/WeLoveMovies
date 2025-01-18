const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const methodNotAllowed = require("../errors/methodNotAllowed");

async function reviewExists(request, response, next) {
  const { review_id } = request.params;
  const review = await service.read(review_id);

  if (review) {
    response.locals.review = review;
    return next();
  }

  return next({
    status: 404,
    message: `Review cannot be found.`
  });

}

async function destroy(request, response) {
  const { review_id } = request.params;
  await service.destroy(review_id);
  response.sendStatus(204);

}

async function list(request, response) {
  const { movie_id } = request.params;
  const data = await service.list(movie_id);
  response.json({ data });
}

function hasMovieIdInPath(request, response, next) {
  if (request.params.movie_id) {
    return next();
  }
  methodNotAllowed(request, response, next);
}

function noMovieIdInPath(request, response, next) {
  if (request.params.movie_id) {
    return methodNotAllowed(request, response, next);
  }
  next();
}

async function update(request, response) {
  const updatedReview = {
    ...response.locals.review,
    ...request.body.data,
    review_id: response.locals.review.review_id,
  };

  const data = await service.update(updatedReview);
  response.json({ data });

}

module.exports = {
  destroy: [
    noMovieIdInPath,
    asyncErrorBoundary(reviewExists),
    asyncErrorBoundary(destroy),
  ],
  list: [hasMovieIdInPath, asyncErrorBoundary(list)],
  update: [
    noMovieIdInPath,
    asyncErrorBoundary(reviewExists),
    asyncErrorBoundary(update),
  ],
};
