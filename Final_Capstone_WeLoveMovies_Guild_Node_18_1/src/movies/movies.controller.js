const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  // TODO: Add your code here.

  next({});
}

async function read(request, response) {
  // TODO: Add your code here
  response.json({ data: "" });
}

async function list(request, response) {
  // TODO: Add your code here.
  const data = await service.list();
  response.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
