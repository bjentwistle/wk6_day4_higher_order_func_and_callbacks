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

// Cinema.prototype.findFilmByGenre = function(filmGenre) {
//   const filmByGenre = this.films.filter(film => film.genre === filmGenre)
//   return filmByGenre
// };

// Cinema.prototype.findFilmsForYear = function(filmYear){
//   const filmByYear = this.films.filter(film => film.year === filmYear) 
//   return filmByYear
// };

//extension - combine findFilmByGenre & findFilmsForYear
Cinema.prototype.findFilmsByProperty = function(property, value) {
  const filmByProperty = this.films.filter(film => film[property] === value)
  //console.log(filmByProperty)
  return filmByProperty
};


Cinema.prototype.findFilmsByYear = function(filmYear){
  const filmByYear = this.films.filter(film => film.year === filmYear) 
  //console.log(filmByYear)
  if (filmByYear.length > 0) {
      result =  true;
  } else {
      result =  false;
  }
  return result
};


Cinema.prototype.checkFilmsByLength = function(filmLength) {
  const filmByLength = this.films.filter(film => film.length === filmLength)
  return filmByLength
};

Cinema.prototype.getTotalOfRunTimes = function(){
  const eachFilmLength = this.films.map(film => film.length)
  // console.log(eachFilmLength)
  const totalOfRunTimes = eachFilmLength.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return totalOfRunTimes
};

module.exports = Cinema;
