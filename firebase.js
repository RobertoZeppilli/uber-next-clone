// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyB9e7LXflhiRoVJkxuQxC7atv04ki55-Gk",

    authDomain: "uber-next-clone-e2b3f.firebaseapp.com",

    projectId: "uber-next-clone-e2b3f",

    storageBucket: "uber-next-clone-e2b3f.appspot.com",

    messagingSenderId: "1024832615715",

    appId: "1:1024832615715:web:69df75fd38fb4a720c4896"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }