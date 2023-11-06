const express = require('express');
const genresRouter = require('./genres.reoute');
const actoursRouter = require('./actors.route');
const directorsRouter = require('./directors.route')
const moviesRouter = require('./movies.route')
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', genresRouter)
router.use('/actors', actoursRouter)
router.use('/directors', directorsRouter)
router.use('/movies', moviesRouter)
module.exports = router;