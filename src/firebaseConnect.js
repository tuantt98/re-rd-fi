import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyA8AYAXL7XxpZTRaarC6GYDoxvnzwd5w4w",
    authDomain: "nodereact-32744.firebaseapp.com",
    databaseURL: "https://nodereact-32744.firebaseio.com",
    projectId: "nodereact-32744",
    storageBucket: "nodereact-32744.appspot.com",
    messagingSenderId: "781422925219",
    appId: "1:781422925219:web:91b95de50b129741997616",
    measurementId: "G-JSP863Z932"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase

// let data = firebase.database().ref('0')

// Select
// data.once('value').then(function(snapshot){
//     console.log(snapshot.val())
// })

// update
// data.set({
//     id:1,
//     title: 'Update',
//     content: 'ABCXYZ'
// })


