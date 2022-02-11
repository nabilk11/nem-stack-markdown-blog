const express = require('express');
const Article = require('../models/article')
const router = express.Router();

///Routes relative to /articles path///
// NEW - GET Route for New Articles
router.get('/new', (req, res) => {
    res.render("articles/new", {article: new Article})
})

// EDIT - GET Router for Editing Articls
router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render("articles/edit", {article: article})
})


// SHOW - GET Route for Articles
router.get('/:slug', async (req, res) => {
    const article = await Article.findOne({
        slug: req.params.slug})
    if (article == null) res.redirect('/')
    res.render('articles/show', {article: article})
})

// CREATE - POST Route for Create New Articles (uses middlewate saveAndRedirect)
router.post('/', async (req, res, next) => {
   req.article = new Article()
    next()
}, saveAndRedirect('new'))


// UPDATE - PUT Route for Updating Edited Articles
router.put('/:id', async (req, res, next) => {
    req.article = await Article.findById(req.params.id)
     next()
 }, saveAndRedirect('edit'))



// DELETE - DELETE Route for Articles
router.delete('/:id', async (req, res) => {
await Article.findByIdAndDelete(req.params.id) 
res.redirect('/')
})


// CREATE/UPDATE Route Middlware
function saveAndRedirect (path) {
return async (req, res) => {
    let article = req.article
        article.title = req.body.title
        article.description = req.body.description
        article.markdown = req.body.markdown   
      
      try     { 
         article = await article.save()
         res.redirect(`/articles/${article.slug}`)
      } catch (err) {
          console.log(`Error in Create: ${err}.`)
          res.render(`articles/${path}`, {article: article})
  
      }
}
}



module.exports = router;

