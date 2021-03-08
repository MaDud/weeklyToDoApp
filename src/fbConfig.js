import firebase from 'firebase/app';
import 'firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDKV7jzF3sEfaFSLA99uJrgewhhj-Rk7r4",
    authDomain: "weeklytodoapp.firebaseapp.com",
    projectId: "weeklytodoapp",
    storageBucket: "weeklytodoapp.appspot.com",
    messagingSenderId: "153401274191",
    appId: "1:153401274191:web:16929c951a558228f55f3a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf