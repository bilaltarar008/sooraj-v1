import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDz5MU9psndQYhwxaTKe0eJMCrmutdKOUA",
  authDomain: "sooraj-crop-sciences-21b09.firebaseapp.com",
  projectId: "sooraj-crop-sciences-21b09",
  storageBucket: "sooraj-crop-sciences-21b09.appspot.com",
  messagingSenderId: "801342188260",
  appId: "1:801342188260:web:18b6ca91846e609c265af1",
  measurementId: "G-YMMRFBXLXP5",
};

export const app = initializeApp(firebaseConfig);

// Safe Analytics (works in incognito too)
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});
