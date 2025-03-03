const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route("/:movie_id")
    .get(controller.read)
    .all(methodNotAllowed);

router
    .use("/:movie_id/theaters", controller.movieExists, theatersRouter);

router
    .use("/:movie_id/reviews", controller.movieExists, reviewsRouter);

// Catch all unhandled routes for /movies/:movieId/*
router.all("/:movieId/*", (req, res) => {
    res.status(404).json({ error: "Not found" });
});

module.exports = router;
