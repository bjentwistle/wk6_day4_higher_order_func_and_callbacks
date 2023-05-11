const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilms = function(){
  const filmsList = this.films.map(film => film.title)
  return filmsList
};

Cinema.prototype.findFilmByTitle = function(filmTitle) {
  const filmByTitle = this.films.filter(film => film.title === filmTitle )
  return filmByTitle //return an array with one film object
};

Cinema.prototype.findFilmByGenre = function(filmGenre) {
  const filmByGenre = this.films.filter(film => film.genre === filmGenre)
  return filmByGenre
};

Cinema.prototype.findFilmByYear = function(filmYear){
  const filmByYear = this.films.filter(film => film.year === filmYear) 
  return filmByYear
};

module.exports = Cinema;
