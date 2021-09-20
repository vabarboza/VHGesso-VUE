import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTXGxuk4vPzuM_XxeRI-637JPPxCaSZzk",
  authDomain: "vhgesso-2dc73.firebaseapp.com",
  projectId: "vhgesso-2dc73",
  storageBucket: "vhgesso-2dc73.appspot.com",
  messagingSenderId: "291800489169",
  appId: "1:291800489169:web:db21238d272b693bfcb9f0",
  measurementId: "G-V3YG04F6QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')