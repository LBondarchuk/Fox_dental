import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: 'foxdental-ea707',
  storageBucket: 'foxdental-ea707.appspot.com',
  messagingSenderId: '211667581892',
  appId: '1:211667581892:web:e730c1a756efcb7854c291',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
