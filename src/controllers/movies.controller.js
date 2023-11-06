const catchError = require('../utils/catchError');
const Movies = require('../models/Movies');
const Genres = require('../models/Genres');
const Directors = require('../models/Directors');
const Actors = require('../models/Actors');

const getAll = catchError(async(req, res) => {
    const results = await Movies.findAll({include: [Genres, Actors, Directors]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movies.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movies.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Movies.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movies.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const moviesGenreId = catchError(async(req, res) => {
  const { id } = req.params;
  const movie = await Movies.findByPk(id);
  if (!movie) return res.status(404).json({message: "Movie not fund"});
  await movie.setGenres(req.body);
  const genres = await movie.getGenres();
  return res.json(genres)
  
});  

const moviesActor = catchError(async(req,res) =>{
    const { id } = req.params;
    const movie = await Movies.findByPk(id);
    if(!movie) return res.status(404).json({message:"movie not fund"});
    await movie.setActors(req.body);
    const actors = await movie.getActors();
    return res.json(actors);
});

const moviesDirector = catchError(async(req,res) => {
    const {id} = req.params;
    const movie = await Movies.findByPk(id);
    if(!movie) return res.status(404).json({message:"movie not fund"});
    await movie.setDirectors(req.body);
    const directors = await movie.getDirectors();
    return res.json(directors);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    moviesGenreId,
    moviesActor,
    moviesDirector,
}