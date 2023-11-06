const { getAll, create, getOne, remove, update } = require('../controllers/actors.controller');
const express = require('express');

const actoursRouter = express.Router();

actoursRouter.route('/')
    .get(getAll)
    .post(create);

actoursRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = actoursRouter;