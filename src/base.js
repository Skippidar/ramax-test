import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmLaA8j0SuW7uN7dW1_NPpOBngPNmW-A0",
    authDomain: "frontacoustic-1514130900123.firebaseapp.com",
    databaseURL: "https://frontacoustic-1514130900123.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;