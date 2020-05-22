import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDiD9QOHQQ8ukpYERQVK_5tnnOSOfwWpF0",
  authDomain: "barter-system-app-b666a.firebaseapp.com",
  databaseURL: "https://barter-system-app-b666a.firebaseio.com",
  projectId: "barter-system-app-b666a",
  storageBucket: "barter-system-app-b666a.appspot.com",
  messagingSenderId: "284859950864",
  appId: "1:284859950864:web:0f21d7f553becf0dfa2795"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();