const express = require('express');
const router = express.Router();

///Routes relative to /articles path///
// GET Route for New Articles
router.get('/new', (req, res) => {
    res.render("articles/new")
})

// POST Route for Create New Articles 
router.post('/', (req, res) => {
    
})



module.exports = router;

