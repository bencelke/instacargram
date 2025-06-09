import { initializeApp } from 'firebase/app';

// Replace these placeholder values with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBWUuxJzzGlar9_bO-TnWQSS0YF9oIAhok",
  authDomain: "instacargram-8e788.firebaseapp.com",
  projectId: "instacargram-8e788",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);

export default app;
