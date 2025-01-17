import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchData = async (collectionName, cb) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    console.log(querySnapshot.docs.length);
    const newItems = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    cb(newItems.sort((a, b) => a.seqNumber - b.seqNumber));
  } catch (error) {
    console.error('Error fetching documents:', error);
  }
};
