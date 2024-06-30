import { database, reference,retrieveData } from "../../../Firebase-config/firebase-config.js";


function getUserID(){
    let userID = JSON.parse(localStorage.getItem('userID'));

    let userRef=reference(database,"Users/"+userID);

    let userData=retrieveData(userRef,(snapshot)=>{
        return snapshot.val();
    })
    
   return userData;
}

