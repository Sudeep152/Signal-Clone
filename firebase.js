import * as firebase from 'firebase';
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCE8jHlyV5eKDXl5xU4PlLs_wWNi201E5w",
    authDomain: "signal-clone-af150.firebaseapp.com",
    projectId: "signal-clone-af150",
    storageBucket: "signal-clone-af150.appspot.com",
    messagingSenderId: "50437343358",
    appId: "1:50437343358:web:54a418f05c849906ceb02f",
    measurementId: "G-TCKQHWT4PD"
  };
  let app;
  if(firebase.apps.length ===0){
    app= firebase.initializeApp(firebaseConfig)
  }else{
     app= firebase.app();
  }


const auth = firebase.auth();

export {auth};
  