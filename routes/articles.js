const express = require('express');
const Article = require('../models/article')
const router = express.Router();

///Routes relative to /articles path///
// NEW - GET Route for New Articles
router.get('/new', (req, res) => {
    res.render("articles/new", {article: new Article})
})

// SHOW - GET Route for Articles
router.get('/:slug', async (req, res) => {
    const article = await Article.findOne({
        slug: req.params.slug})
    if (article == null) res.redirect('/')
    res.render('articles/show', {article: article})
})

// CREATE - POST Route for Create New Articles 
router.post('/', async (req, res) => {
    let article = new Article({
      title: req.body.title,
      description: req.body.description,
      markdown: req.body.markdown,    
    })
    try     { 
       article = await article.save()
       res.redirect(`/articles/${article.slug}`)
    } catch (err) {
        console.log(`Error in Create: ${err}.`)
        res.render('articles/new', {article: article})

    }
    
})

// DELETE - DELETE Route for Articles
router.delete('/:id', async (req, res) => {
await Article.findByIdAndDelete(req.params.id) 
res.redirect('/')
})



module.exports = router;

