// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    // apiKey: "AIzaSyABe-1N-6nqTS3oigRGNVJqkoq0mKR3wmE",
    // authDomain: "notification-app-c6398.firebaseapp.com",
    // projectId: "notification-app-c6398",
    // storageBucket: "notification-app-c6398.firebasestorage.app",
    // messagingSenderId: "1056693008330",
    // appId: "1:1056693008330:web:2c01351aa6ba5075888133",
    // measurementId: "G-HQZ5X744GN"

      apiKey: "AIzaSyCDN2Xbp7J4fshmP84ANUpPUfHkbK1G6ns",
  authDomain: "push-notification-c7423.firebaseapp.com",
  projectId: "push-notification-c7423",
  storageBucket: "push-notification-c7423.firebasestorage.app",
  messagingSenderId: "1015924672858",
  appId: "1:1015924672858:web:bf96b063ceb73b7db8cb63",
  measurementId: "G-G8ZQT6S2Z0"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});