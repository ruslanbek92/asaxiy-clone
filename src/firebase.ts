// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBzTNkkhv1sM0Zzruu4dfPvcvwmMQC6Kfw',
    authDomain: 'asaxiy-clone-47cae.firebaseapp.com',
    projectId: 'asaxiy-clone-47cae',
    storageBucket: 'asaxiy-clone-47cae.appspot.com',
    messagingSenderId: '15578657740',
    appId: '1:15578657740:web:758e4bb7528666b81ea369',
    measurementId: 'G-4E99K2BZS2',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
