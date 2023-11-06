const Actors = require('./Actors')
const Movies = require('./Movies')
const Genres = require('./Genres')
const Directors = require('./Directors')



Movies.belongsToMany(Actors, { through: "moviesActors"});
Actors.belongsToMany(Movies, { through: "moviesActors"});


Movies.belongsToMany(Genres, { through: "moviesGenre"});
Genres.belongsToMany(Movies, { through: "moviesGenre"});


Movies.belongsToMany(Directors, { through: "directorsActors"});
Directors.belongsToMany(Movies, { through: "directorsActors"});


