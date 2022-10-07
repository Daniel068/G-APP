// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEQAoc6b3FJtI9dhSje16Rr6Sdw1xDGyU",
  authDomain: "g-crest-1bb10.firebaseapp.com",
  projectId: "g-crest-1bb10",
  storageBucket: "g-crest-1bb10.appspot.com",
  messagingSenderId: "647573722887",
  appId: "1:647573722887:web:b0b55603136fc7b04597a2"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app()
}

const auth = firebase.auth ()

export {auth};

