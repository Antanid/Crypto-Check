import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, sendEmailVerification} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCORTvGklt98qMrxpHgJ5tS5x6kfeG-rNk",
  authDomain: "cryptocheck-a42f5.firebaseapp.com",
  projectId: "cryptocheck-a42f5",
  storageBucket: "cryptocheck-a42f5.appspot.com",
  messagingSenderId: "19431395409",
  appId: "1:19431395409:web:dc3f7feb16023080546870",
  measurementId: "G-88XNBBWEM2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const createUser = async (email: string, password: string) => {
  const createNew = await createUserWithEmailAndPassword(getAuth(app), email, password);
  await sendEmailVerification(createNew.user);
  return createNew
}

export const signInUser = async (email: string, password: string) => {
return signInWithEmailAndPassword(getAuth(app),  email, password)
}