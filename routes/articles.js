const express = require('express');
const router = express.Router();

///Routes relative to /articles path///
// GET Route
router.get('/', (req, res) => {
    res.send("in articles directory")
})


module.exports = router;

