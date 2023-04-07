var firebaseConfig = {
    apiKey: "AIzaSyAJPUh7IyAoJfSWOmi4YGJ_HulUv8avJg4",
    authDomain: "test-ccl-f8332.firebaseapp.com",
    projectId: "test-ccl-f8332",
    storageBucket: "test-ccl-f8332.appspot.com",
    messagingSenderId: "686239997581",
    appId: "1:686239997581:web:80f7f309e28672b2744cc4",
    measurementId: "G-PCSWG3SGHX"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();