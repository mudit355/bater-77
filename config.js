import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC2Ay3eNttgtuieQ5adHDuZ03lK1dI_gUQ",
  authDomain: "barter-app-103da.firebaseapp.com",
  projectId: "barter-app-103da",
  storageBucket: "barter-app-103da.appspot.com",
  messagingSenderId: "867272191830",
  appId: "1:867272191830:web:613b8466fa78e0e35930f7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
