
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';

import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpe5HP9koGAwH_a_uIkba0tnsCN2PWLTI",
  authDomain: "cah-mechamogeo.firebaseapp.com",
  projectId: "cah-mechamogeo",
  storageBucket: "cah-mechamogeo.appspot.com",
  messagingSenderId: "822829307439",
  appId: "1:822829307439:web:a1b4fd912fd6ae1e5c98da",
  measurementId: "G-0VY46RJM55"
};

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export function createCollection<T = DocumentData>(
  collectionName: string
): CollectionReference<T> {
  return collection(db, collectionName) as CollectionReference<T>;
}
export const matchesCollection = createCollection<MatchType>('matches');
export const generalCollection = createCollection<GeneralType>('general');
export const cardsCollection = createCollection<CardType>('cards');
export const usersCollection = createCollection<UserType>('users');
export const adminsCollection = createCollection('admins');

export const authProvider = new GoogleAuthProvider();
export const auth = getAuth();

export async function login(): Promise<UserCredential> {
  return signInWithPopup(auth, authProvider);
}
