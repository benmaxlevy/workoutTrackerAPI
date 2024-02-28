const express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

// dotenv
require("dotenv").config();

// 404 handling
app.get("*", (req, res) => {
    return res.status(404).json({message: "Error"});
});

// error handler
app.use((err, req, res, next) => {
    console.error(err);
    if (res.headersSent) {
        return next(err);
    }
    return res.status(500).json({message: "Error"})
});

// boot http server up
app.listen(process.env.RUN_PORT, () => {
    console.log(`Up on ${process.env.RUN_PORT}!`);
});