import { initializeApp } from 'firebase/app';

// Replace these placeholder values with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBWUuxJzzGlar9_bO-TnWQSS0YF9oIAhok",
  authDomain: "instacargram-8e788.firebaseapp.com",
  projectId: "instacargram-8e788",
  storageBucket: "instacargram-8e788.firebasestorage.app",
  messagingSenderId: "982533527254",
  appId: "1:982533527254:web:bf8bbeccaf8b6e0e5c9b77"
};

const app = initializeApp(firebaseConfig);

export default app;
