import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// API key for my firebase project
const config = {
    apiKey: "AIzaSyC7ZhSuZ8Of6FJkO_YBEzzqva4m0YC44ng",
    authDomain: "krown-apparel-db.firebaseapp.com",
    databaseURL: "https://krown-apparel-db.firebaseio.com",
    projectId: "krown-apparel-db",
    storageBucket: "krown-apparel-db.appspot.com",
    messagingSenderId: "621237047345",
    appId: "1:621237047345:web:e6451d5da534b82be00510",
    measurementId: "G-273RL01E6Q"
}

// function to creates user and store to firestore/users
// if data is exists, just pass data
// if it's not, create and store to firestore
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    // console.log(snapshot);
    // console.log(userRef);

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating new user', error);
        }
    }

    return userRef;
}

// init firebase base my config
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// create google auth to sign in with google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

