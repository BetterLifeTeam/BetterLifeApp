import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFNUU9Kf0yGh0Iq0LD0-Nqt-NkOjQduqY",
    authDomain: "betterlife-ac1f8.firebaseapp.com",
    databaseURL: "https://betterlife-ac1f8.firebaseio.com",
    projectId: "betterlife-ac1f8",
    storageBucket: "betterlife-ac1f8.appspot.com",
    messagingSenderId: "236263271964",
    appId: "1:236263271964:web:3d173f4437827ef20439d9",
    measurementId: "G-NK2DDGBG9X"
};

firebase.initializeApp(firebaseConfig);

export default firebase;