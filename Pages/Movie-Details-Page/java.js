

import {
    auth,
    database,
    reference,
    addData,
    retrieveData,
    query
} from "../../Firebase-config/firebase-config.js";

// الحصول على قيمة المفتاح المخزن في sessionStorage
const movieKey = JSON.parse(sessionStorage.getItem("Name-Movie"));

function getMovieDataByName(movieKey) {
    console.log( " is" + movieKey)
    const movieRef = reference(database, "Movies/"+movieKey);
    console.log(movieRef)
   retrieveData(movieRef,(snapshot)=>{
let movieData=snapshot.val();
if(movieData!=null){
    displayMovieData(movieData)
}
else{
    alert("Data wasnt found");
}
   })
}

function displayMovieData(movieData) {
    const section = document.querySelector('.hero');
    section.innerHTML = `
        <div class="movie">
            <img src="${movieData.imageHorizontal}" alt="${movieData.Name}">
            <h2 style="color:red";>${movieData.name}</h2>
            <p>${movieData.description}</p>
            
        </div>
        
    `;
    const actorsContainer = document.querySelector('.a');
actorsContainer.innerHTML = ''; // مسح أي محتوى موجود

if (Array.isArray(movieData.mainActors)) {
    movieData.mainActors.forEach(actor => { // نأخذ فقط 3 ممثلين
        const actorCard = document.createElement('div');
        actorCard.classList.add('actor');
        actorCard.innerHTML = `<h2>${actor}</h2>`;
        actorsContainer.appendChild(actorCard);
    });
} else {
    console.error("MainActors is not an array or doesn't exist in movieData");
}
}

getMovieDataByName(movieKey);












// const db_ref = reference(database);
// get(child(db_ref, "Movies/"+movieKey + "/" + MainActors))
//             .then((stored_data) => {
//                 document.getElementById("actor1").textContent = stored_data.val().MainActors[0];
//                 document.getElementById("actor2").textContent = stored_data.val().MainActors[1];
//                 document.getElementById("actor3").value = stored_data.val().MainActors[2];
                

//             })
//             .then(() => { })
//             .catch((error) => { error })
   


