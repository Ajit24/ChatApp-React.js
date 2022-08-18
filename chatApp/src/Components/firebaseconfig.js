import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDu9HuUzJ4CMiVGrgeJi7otzJwHTxuVg1U",
  authDomain: "firechat-98288.firebaseapp.com",
  projectId: "firechat-98288",
  storageBucket: "firechat-98288.appspot.com",
  messagingSenderId: "727598954685",
  appId: "1:727598954685:web:d58641c40b4e347d4edfd4",
  measurementId: "G-SHEG3WBREG"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{auth,provider};
  export default db;
  