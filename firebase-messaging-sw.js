importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyC0tBdwH6j9PwIpgT0be9BddqSOCcvXKds",
    authDomain: "sendnotificationpubsub.firebaseapp.com",
    projectId: "sendnotificationpubsub",
    storageBucket: "sendnotificationpubsub.appspot.com",
    messagingSenderId: "826826798842",
    appId: "1:826826798842:web:8a8e7a71879cb169b8bb43",
    measurementId: "G-B82ZY52T1B"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

