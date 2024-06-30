import { database, retrieveData, reference } from "../../../Firebase-config/firebase-config.js";

// Reference to the Movies node in the database





// Function to create a card
function createCard(movie) {
    
    const cardsContainer = document.getElementById('cards-container');
const profile = document.getElementById('profile-container')
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('p');
    title.className = 'title';
    title.innerText = movie.Name;

    const poster = document.createElement('div');
    poster.className = 'poster';

    const image = document.createElement('img');
    image.src = movie.imageVertical;
    poster.appendChild(image);

    const reaction = document.createElement('div');
    reaction.className = 'reaction';
    reaction.innerHTML = `
        <i class="fas fa-play"></i>
        <i class="fas fa-heart"></i>
    `;
    poster.appendChild(reaction);

    const info = document.createElement('div');
    info.className = 'info';
    info.innerHTML = `
        <div class="clock">
            <i class="fa-solid fa-clock"></i>
            <p class="time">${movie.Duration}</p>
        </div>
        <div class="rate">Directed by: ${movie.Director}</div>
        <div class="description">${movie.Description}</div>
    `;

    card.appendChild(title);
    card.appendChild(poster);
    card.appendChild(info);

    return card;
}

// Fetch data from Firebase and create cards

function getMoviesData(){
    const moviesRef = reference(database, 'Movies/');
retrieveData(moviesRef,(snapshot)=>{
    let movieData=snapshot.val();
    if(movieData!=null){
        createCard()
    }
    else{
        alert("Error");
    }
})
}
const movieFromLocalStorage = JSON.parse(localStorage.getItem('currentUser'));
// console.log(movieFromLocalStorage)
if (movieFromLocalStorage) {
    // Generate a new key for the new movie
    const newMovieRef = reference(database, 'Movies/' + .Name);
    // Store the movie object in FirebasemovieFromLocalStorage
    set(newMovieRef, movieFromLocalStorage).then(() => {
        console.log("Movie stored in Firebase successfully.");
    }).catch((error) => {
        console.error("Error storing movie in Firebase: ", error);
    });
}

