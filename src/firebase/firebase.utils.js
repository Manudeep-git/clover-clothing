import firebase from 'firebase';

// import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD01bD1YUq4rNDReXzn9Zun5XlVsKJjIUw",
    authDomain: "e-commerce-app-31dc7.firebaseapp.com",
    projectId: "e-commerce-app-31dc7",
    storageBucket: "e-commerce-app-31dc7.appspot.com",
    messagingSenderId: "637836152192",
    appId: "1:637836152192:web:36bc9136915cc8b29f0565",
    measurementId: "G-MMRR9XFFHS"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async(userAuth, otherData) => {
    if(!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);//document reference object

    // await userRef.onSnapshot(doc => {
    //     snapShot = doc;
    // }) // not able to get exists prop with onSnapshot if document doesn't exists

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return userRef;//always returns the snapShot user reference
}

export const checkUserSignIn = () => {

}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;