import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDz5MU9psndQYhwxaTKe0eJMCmutdKOUA",
  authDomain: "sooraj-crop-sciences-21b09.firebaseapp.com",
  projectId: "sooraj-crop-sciences-21b09",
  storageBucket: "sooraj-crop-sciences-21b09.appspot.com",
  messagingSenderId: "801342188260",
  appId: "1:801342188260:web:18b6ca91846e609c265af1",
  measurementId: "G-YMMRFBLXP5"
};

const app = initializeApp(firebaseConfig);

// Analytics only works in browser
if (typeof window !== "undefined") {
  getAnalytics(app);
}

export default app;
