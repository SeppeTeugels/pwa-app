import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { enableIndexedDbPersistence } from "firebase/firestore";
const firebaseConfig = {
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(firebaseApp);
const db = getFirestore(firebaseApp);
console.log("initialized firebase connection");


enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });