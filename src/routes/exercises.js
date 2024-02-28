const express = require("express"),
    exercisesRouter = express(),
    bodyParser = require("body-parser"),
    knex = require("../knexClient");

// get body parser going
exercisesRouter.use(bodyParser.urlencoded({ extended: false }));

// get exercises
