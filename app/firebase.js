import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4dnwyaR_GAWQtlXgApVZLvpsPJg2glfw",
  authDomain: "ecom-82301.firebaseapp.com",
  projectId: "ecom-82301",
  storageBucket: "ecom-82301.firebasestorage.app",
  messagingSenderId: "887619260537",
  appId: "1:887619260537:web:08d248bb4bdffff01904a8",
  measurementId: "G-60B4V9VDK1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
