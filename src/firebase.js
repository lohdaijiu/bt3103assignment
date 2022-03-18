import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDmZIbacD-lljdzGIKHL6tVvlToujTqZ5E",
    authDomain: "assignment-3-37beb.firebaseapp.com",
    projectId: "assignment-3-37beb",
    storageBucket: "assignment-3-37beb.appspot.com",
    messagingSenderId: "766586588184",
    appId: "1:766586588184:web:7e4534a4075766cc6d476d",
    measurementId: "G-EJ84KB2T9K"
};

const firebaseApp = initializeApp(firebaseConfig);
console.log("DONE")
export default firebaseApp;