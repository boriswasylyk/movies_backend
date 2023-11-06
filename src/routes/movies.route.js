const { getAll, create, getOne, remove, update, moviesGenreId, moviesActor, moviesDirector } = require('../controllers/movies.controller');
const express = require('express');

const moviesRouter = express.Router();

moviesRouter.route('/')
    .get(getAll)
    .post(create);

moviesRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
    
    
moviesRouter.route('/:id/genres')
    .post(moviesGenreId)

moviesRouter.route('/:id/actors')
    .post(moviesActor)

moviesRouter.route('/:id/directors')
    .post(moviesDirector)


module.exports = moviesRouter;