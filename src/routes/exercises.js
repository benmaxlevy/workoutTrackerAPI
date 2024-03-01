const express = require("express"),
    exercisesRouter = express(),
    bodyParser = require("body-parser"),
    knex = require("../knexClient");

// get body parser going
exercisesRouter.use(bodyParser.urlencoded({ extended: false }));

// get exercises
exercisesRouter.get("/", async (req, res, next) => {
    try {
        const exercises = await knex("exercises").select([
            "exercise",
            "lastWeight",
            "lastReps"
        ]);
        res.status(200).json({ message: "Success", payload: exercises });
    } catch (e) {
        next(e);
    }
});

// create a new exercise
exercisesRouter.post("/", async (req, res, next) => {
    try {
        const { exercise, lastWeight=0.0, lastReps=0 } = req.body;
        const newExercise = await knex("exercises").insert({ exercise, lastWeight, lastReps });
        res.status(201).json({ message: "Exercise created", payload: newExercise });
    } catch (e) {
        next(e);
    }
});

// get a specific exercise
exercisesRouter.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const exercise = await knex("exercises").where({ id }).first();
        res.status(200).json({ message: "Success", payload: exercise });
    } catch (e) {
        next(e);
    }
});

// update a specific exercise
exercisesRouter.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const { exercise, lastWeight=0.0, lastReps=0 } = req.body;
        const updatedExercise = await knex("exercises").where({ id }).update({ exercise, lastWeight, lastReps });
        res.status(200).json({ message: "Exercise updated", payload: updatedExercise });
    } catch (e) {
        next(e);
    }
});

// delete a specific exercise
exercisesRouter.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        await knex("exercises").where({ id }).del();
        res.status(200).json({ message: "Exercise deleted" });
    } catch (e) {
        next(e);
    }
});