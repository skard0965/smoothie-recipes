import firebase from 'firebase';
// import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBJScjMMfGQJ4niR3fdE4zfuEhISGOFVak",
    authDomain: "smoothie-recipes-a21c3.firebaseapp.com",
    databaseURL: "https://smoothie-recipes-a21c3.firebaseio.com",
    projectId: "smoothie-recipes-a21c3",
    storageBucket: "smoothie-recipes-a21c3.appspot.com",
    messagingSenderId: "974862231986",
    appId: "1:974862231986:web:cce5e3ae5690eabe5ddcab",
    measurementId: "G-DWLRHVN83X"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebaseApp.firestore()
