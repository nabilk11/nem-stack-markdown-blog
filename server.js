require('dotenv').config();
/* ==== External Modules ==== */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

/* ==== Database Connection ==== */
const db = mongoose.connection;
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Nem Stack Blog is Now Connected to MongoDB at ${db.host}:${db.port}!`)
}).catch((err) => console.log(`Connection Failed! Error: ${err}.`))
//Articles Router
const articleRouter = require('./routes/articles');
/* ====  Configuration  ==== */
app.set("view engine", "ejs");
// COnfiguring Public Folder
const public = path.join(__dirname, './public')


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