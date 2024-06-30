// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWyRt-9CbwrUeUb8Dl2ldkLoJQ5gEJMfg",
    authDomain: "baor-project.firebaseapp.com",
    databaseURL: "https://baor-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "baor-project",
    storageBucket: "baor-project.appspot.com",
    messagingSenderId: "544542622273",
    appId: "1:544542622273:web:c73467b408819f34befcc0",
    measurementId: "G-KER7P3R8LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
