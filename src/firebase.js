import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC1wqCE_omEBv0NhinSm9dvTsBpe7tvSiY",
    authDomain: "nicomolon-slack-clone.firebaseapp.com",
    projectId: "nicomolon-slack-clone",
    storageBucket: "nicomolon-slack-clone.appspot.com",
    messagingSenderId: "177842490511",
    appId: "1:177842490511:web:bdeeab95058670dda8f4fa",
    measurementId: "G-BJHZ5Q6QYB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
export default db;