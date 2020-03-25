class UI {
  static addFilmToUI(newFilm) {
    /*
      <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
         <td></td>
         td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
      */

    const filmList = document.getElementById("films");

    filmList.innerHTML += `
      
    <tr>
      <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td>${newFilm.title}</td>
      <td>${newFilm.directory}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>
      `;
  }

  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }

  static displayMessage(message, type) {
    const cardBody = document.querySelector(".card-body");

    // Alet div

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function() {
      div.remove();
    }, 1000);
  }

  // Strogdan alıp arayüze ekleme

  static loadAllFilms(films) {
    const filmList = document.getElementById("films");

    films.forEach(function(film) {
      filmList.innerHTML += `
      
    <tr>
      <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
      <td>${film.title}</td>
      <td>${film.directory}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`;
    });
  }

  // Arayüzden film kaldırma

  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
  }

  static clearAllFilmsFormUI() {
    const filmList = document.getElementById("films");

    // filmList.innerHTML = "";

    while (filmList.firstElementChild != null) {
      // child olduğu sürece
      filmList.firstElementChild.remove(films);
    }
  }
}
