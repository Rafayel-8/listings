const firebaseConfig = {
    apiKey: "AIzaSyDJSz3de5bwP0DqlNPAQ8GSNvQvsMrVow4",
    authDomain: "mywebsite-b6912.firebaseapp.com",
    projectId: "mywebsite-b6912",
    storageBucket: "mywebsite-b6912.appspot.com",
    messagingSenderId: "431907285830",
    appId: "1:431907285830:web:a8aa08c9438ad752e49347"
  };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

  
