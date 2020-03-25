class Storage {
  static addFilmToStroge(newFilm) {
    let films = this.getFilmFromStorage();

    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }

  static getFilmFromStorage() {
    let films;

    // Local Storgda films adında key yoksa boş bir array oluşturulacak

    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      // array içerisindeki değerleri string haline getirdik

      films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
  }

  static deleteFilmFromStorage = function(filmTitle) {
    let films = this.getFilmFromStorage();

    // splice arrayden silmek

    films.forEach(function(film, index) {
      if (film.title === filmTitle) {
        films.splice(index, 1);
      }
    });

    // tekrardan localstoraga yazma

    localStorage.setItem("films", JSON.stringify(films));
  };

  static clearAllFilmsFromStorage = function() {
    localStorage.removeItem("films");
  };
}
