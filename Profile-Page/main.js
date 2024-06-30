import { database, ref, onValue } from '../firebase.js';

// Reference to the Movies node in the database
const moviesRef = ref(database, 'Movies');

// Get the container for the cards
const cardsContainer = document.getElementById('cards-container');

// Function to create a card
function createCard(movie) {
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
onValue(moviesRef, (snapshot) => {
    cardsContainer.innerHTML = ''; // Clear existing cards
    const movies = snapshot.val();
    for (const key in movies) {
        if (movies.hasOwnProperty(key)) {
            const movie = movies[key];
            const card = createCard(movie);
            cardsContainer.appendChild(card);
        }
    }
});
