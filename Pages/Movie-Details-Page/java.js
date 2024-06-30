
import {
    auth, // the same getAuth(app) but this in variable
    database, // the same getDatabase(app) but this in variable
    reference, // the same ref but this in variable
    addData, // the same set but this in variable
    retrieveData, // the same onValue but this in variable 
    query
} from "../../Firebase-config/firebase-config.js";

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.hero');

    // Reference to the movies in the database
    const moviesRef = reference(database, 'Movies/');

    // Function to display movies data
    // const displayMovies = (data) => {
    //     const movies = data.val();
    //     section.innerHTML = ''; // Clear the section

    //     Object.keys(movies).forEach(key => {
    //         const movie = movies[key];

    //         // Create elements for displaying movie data
    //         const movieDiv = document.createElement('div');
    //         movieDiv.classList.add('movie');

    //         const img = document.createElement('img');
    //         img.src = movie.imageHorizontal; // Assuming image URL is stored in this field
    //         img.alt = movie.name;

    //         const title = document.createElement('h2');
    //         title.textContent = movie.name;

    //         const description = document.createElement('p');
    //         description.textContent = movie.description;

    //         movieDiv.appendChild(img);
    //         movieDiv.appendChild(title);
    //         movieDiv.appendChild(description);
    //         section.appendChild(movieDiv);
    //     });
    // };

    // Retrieve data from Firebase
    retrieveData(moviesRef, (snapshot) => {
        if (snapshot.exists()) {
            displayMovies(snapshot);
        } else {
            console.log('No data available');
        }
    });
});
