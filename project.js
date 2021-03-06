const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.querySelector('#clear-films');


// Tüm Eventleri Yükleme

eventListener();

function eventListener() {
    form.addEventListener('submit',addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmFromStorage();
        UI.loadAllFilms(films);

    });

    cardBody.addEventListener('click',deleteFilm);
    clear.addEventListener('click',clearAllFilms);
}

function addFilm(e){

    // Değerlerini alma

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director == "" || url == ""){
        // Hata
        ui.displayMessage("Tüm alanları doldurunuz...","danger");
   
    }

    else{

        // Yeni Film
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); // Arayüze film ekleme
        Storage.addFilmToStroge(newFilm); // Storega film ekleme
        UI.displayMessage("Film Başarıyla Eklendi","success");
    }

    UI.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();

}

function deleteFilm(e){
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("Film Başarıyla Silindi","success");
    }

}

function clearAllFilms(){

    if(confirm("Emin Misiniz?")){
        
    UI.clearAllFilmsFormUI();
    Storage.clearAllFilmsFromStorage();
    }

}
