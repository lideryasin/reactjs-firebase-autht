import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAyoQ3B2tSkTLoNftjQ6ZDkM_v7MTZwI4o",
  authDomain: "denemeler-27522.firebaseapp.com",
  databaseURL: "https://denemeler-27522.firebaseio.com",
  projectId: "denemeler-27522",
  storageBucket: "denemeler-27522.appspot.com",
  messagingSenderId: "114773529643"
};
const fire = firebase.initializeApp(config);
export default fire;
