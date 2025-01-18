const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  const { movie_id } = request.params;
  const movie = await service.read(movie_id);
  if (movie) {
    response.locals.movie = movie;
    return next();
  }
  next({
    status: 404,
    message: `Movie cannot be found.`,
  });
}

async function read(request, response) {
  response.json({ data: response.locals.movie });
}

async function list(request, response) {
  const { is_showing } = request.query;
  const data = await service.list(is_showing === "true");
  response.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
