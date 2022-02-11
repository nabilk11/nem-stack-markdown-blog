require('dotenv').config();
/* ==== External Modules ==== */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

const PORT = process.env.PORT || 3000;

/* ==== Database Connection ==== */
const db = mongoose.connection;
const DB_URL = "mongodb+srv://nk11:pizza123@nk-sei.utmze.mongodb.net/NEMStackBlog?retryWrites=true&w=majority";
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Nem Stack Blog is Now Connected to MongoDB at ${db.host}:${db.port}!`)
}).catch((err) => console.log(`Connection Failed! Error: ${err}.`))

/* ==== Internals ==== */
const articleRouter = require('./routes/articles');
const Article = require('./models/article');

/* ====  Configuration  ==== */
app.set("view engine", "ejs");
// Configuring Public Folder
const public = path.join(__dirname, './public')
app.use(express.static(public))
// URL Encoder Must be Before Routers
app.use(express.urlencoded({extended: false}))
// Method Override
app.use(methodOverride('_method'))




/* ====  Routes & Controllers  ==== */
//INDEX/HOME - GET Route
app.get("/", async (req, res) => {
    const articles = await Article.find().sort({
        dateCreated: 'desc'
    })
    res.render('articles/index', {articles: articles})
})
//404 Route

/* ====  Routers  ==== */
app.use("/articles", articleRouter)

/* ====  Server Listener  ==== */
app.listen(PORT, () => {
    console.log(`NEM Stack Blog Site is Live on Port:${PORT}!`)
})