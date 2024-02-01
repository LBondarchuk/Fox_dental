import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDNPqeJmKuDmo6XbhLYrF9hskDPp5vN6W0',
  authDomain: 'foxdental-ea707.firebaseapp.com',
  projectId: 'foxdental-ea707',
  storageBucket: 'foxdental-ea707.appspot.com',
  messagingSenderId: '211667581892',
  appId: '1:211667581892:web:e730c1a756efcb7854c291',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
