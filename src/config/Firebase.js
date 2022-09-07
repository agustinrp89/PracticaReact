import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRVw1k9ydPmGIDEsj0UZswU09Z2NkwGNw",
    authDomain: "react2022-b26c1.firebaseapp.com",
    projectId: "react2022-b26c1",
    storageBucket: "react2022-b26c1.appspot.com",
    messagingSenderId: "853628304673",
    appId: "1:853628304673:web:e97bdb9cc7a48a4c185260"
  };

firebase.initializeApp(firebaseConfig)
firebase.auth= firebase.auth()
firebase.db=firebase.firestore()
export default firebase