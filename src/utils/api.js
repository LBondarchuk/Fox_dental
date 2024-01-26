import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchData = async (collectionName, cb) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const newItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    cb(newItems);
  } catch (error) {
    console.error('Error fetching documents:', error);
  }
};
