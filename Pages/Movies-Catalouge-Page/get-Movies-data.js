import{
    auth, //the same getAuth(app) but this in variable
    database, //the same getDatabase(app) but this in variable
    reference, //the same ref but this in variable
    addData, //the same set but this in variable
    retrieveData, //the same onValue but this in variable 
    query
} from "../../Firebase-config/firebase-config.js";


function getThreeMovies() {
    const moviesRef = reference(database, 'Movies/');
    retrieveData(moviesRef, (snapshot) => {
        if (snapshot.exists()) {
            const moviesData = snapshot.val();
            for(let i=1; i<=3; i++){
                hereSection(moviesData[i]);
        }
        } else {
            console.log("No data available");
        }
    },);
}

getThreeMovies();

// function hereSection(moviesData){
//     console.log(moviesData);
// }

function fetchMovies() {
    const moviesRef = reference(database, 'Movies/'); 
    retrieveData(moviesRef, (snapshot) => {
        const moviesContainer = document.querySelector('.cards-container');
        moviesContainer.innerHTML = ''; 
        snapshot.forEach((childSnapshot) => {
            const movie = childSnapshot.val();
            const movieId = childSnapshot.key; 
            const card = createMovieCard(movie, movieId);
            moviesContainer.appendChild(card);
        });
    });
}


function createMovieCard(movie, movieId) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p class="title">${movie.Name}</p>
        <div class="poster" style="background-image: url('${movie.imageVertical}'); background-size: cover;
        background-position: center;>
            <div class="reaction">
                <i class="fas fa-play play"></i>
                <i class="fas fa-heart heart"></i>
            </div>
        </div>
        <div class="info">
            <div class="clock">
                <i class="fa-solid fa-clock clock"></i>
                <p class="time">${movie.Duration}</p>
            </div>
            <div class="rate">${movie.Rating}</div>
        </div>
    `;
    card.style.backgroundImage="movie.imageHorizontal"
    card.addEventListener('click', () => {
        sessionStorage.setItem('Name-Movie', movieId); 
        window.location.href = `http://127.0.0.1:5500/Pages/Movie-Details-Page/Movie-Details.html`; 
    });
    return card;
}

document.addEventListener('DOMContentLoaded', fetchMovies);




