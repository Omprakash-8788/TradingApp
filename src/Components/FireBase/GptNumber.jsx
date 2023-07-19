import firebase from 'firebase/app';
import 'firebase/messaging';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA62KhdU2xVsDGo1OnxX4IjK9ECgJJisfo",
    authDomain: "newon-35d97.firebaseapp.com",
    databaseURL: "https://newon-35d97-default-rtdb.firebaseio.com",
    projectId: "newon-35d97",
    storageBucket: "newon-35d97.appspot.com",
    messagingSenderId: "860893571955",
    appId: "1:860893571955:web:f3f0fc0045ee68a2f5b306"
  // Your Firebase configuration goes here
};

firebase.initializeApp(firebaseConfig);

// Get the messaging instance
const messaging = firebase.messaging();

// Request permission to receive notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
  
  // Get the registration token for the user's device
  messaging.getToken().then((token) => {
    console.log('Registration token:', token);

    // Send the notification
    const phoneNumber = '+1234567890'; // Replace with the phone number you want to send the notification to
    const message = {
      data: {
        phoneNumber: phoneNumber,
        message: 'Hello, this is a notification from my React app!'
      }
    };

    firebase.messaging().send(message)
      .then((response) => {
        console.log('Notification sent successfully:', response);
      })
      .catch((error) => {
        console.log('Error sending notification:', error);
      });
  });
}).catch((error) => {
  console.log('Unable to get permission to notify.', error);
});

