if (process.env.USER) require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");

app.use(cors());
app.use(express.json());

const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

// TODO: Add your code here
app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);

app.use(errorHandler);

module.exports = app;
