import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBA3B-hfjJXIx3fD12IhA9TY_rc_WSHOwQ",
    authDomain: "zenvibes118w.firebaseapp.com",
    projectId: "zenvibes118w",
    storageBucket: "zenvibes118w.appspot.com",
    messagingSenderId: "667851414703",
    appId: "1:667851414703:web:397677006fdd130bbdc85a"
  });

  var db = firebaseApp.firestore();

  export { db } 