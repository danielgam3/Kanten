
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIyVnrYFasZlxOzGTqh83yO1q5e_Zsnqk',
  authDomain: 'kanten-1665c.firebaseapp.com',
  projectId: 'kanten-1665c',
  storageBucket: 'kanten-1665c.appspot.com',
  messagingSenderId: '247426098763',
  appId: '1:247426098763:web:3eb34224769cb770adcfce'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
} 