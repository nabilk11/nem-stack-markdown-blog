require('dotenv').config();
/* ==== External Modules ==== */
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
/* ==== Internal Modules ==== */
//Articles Router
const articleRouter = require('./routes/articles');

/* ==== Instanced Modules  ==== */


/* ====  Configuration  ==== */
app.set("view engine", "ejs");
// COnfiguring Public Folder
const public = path.join(__dirname, './public')

/* ====  Middleware  ==== */
app.use(express.static(public))
app.use("/articles", articleRouter)

/* ====  Routes & Controllers  ==== */

//Home Route
app.get("/", (req, res) => {
    const articles = [{
        title: 'Test Article Title',
        dateCreated: new Date(),
        description: 'Test description',
    },
   { title: 'Test Article Title 2',
    dateCreated: new Date(),
    description: 'Test description 2222'},]
    res.render("articles/index", {articles: articles})
})
//404 Route


/* ====  Server Listener  ==== */
app.listen(PORT, () => {
    console.log(`NEM Stack Blog Site is Live on Port:${PORT}!`)
})