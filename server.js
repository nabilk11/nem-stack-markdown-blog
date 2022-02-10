/* ==== External Modules ==== */
const express = require('express');
const app = express();

/* ==== Internal Modules ==== */
//Articles Router
const articleRouter = require('./routes/articles');

/* ==== Instanced Modules  ==== */


/* ====  Configuration  ==== */
app.set("view engine", "ejs");

/* ====  Middleware  ==== */
app.use("/articles", articleRouter)

/* ====  Routes & Controllers  ==== */

//Home Route
app.get("/", (req, res) => {
    res.render("index")
})
//404 Route


/* ====  Server Listener  ==== */
app.listen(3000)