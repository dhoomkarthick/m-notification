// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
import axios from 'axios';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyABe-1N-6nqTS3oigRGNVJqkoq0mKR3wmE",
//     authDomain: "notification-app-c6398.firebaseapp.com",
//     projectId: "notification-app-c6398",
//     storageBucket: "notification-app-c6398.firebasestorage.app",
//     messagingSenderId: "1056693008330",
//     appId: "1:1056693008330:web:2c01351aa6ba5075888133",
//     measurementId: "G-HQZ5X744GN"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCDN2Xbp7J4fshmP84ANUpPUfHkbK1G6ns",
  authDomain: "push-notification-c7423.firebaseapp.com",
  projectId: "push-notification-c7423",
  storageBucket: "push-notification-c7423.firebasestorage.app",
  messagingSenderId: "1015924672858",
  appId: "1:1015924672858:web:bf96b063ceb73b7db8cb63",
  measurementId: "G-G8ZQT6S2Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);


export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    if (permission === "granted") {
        const token = await getToken(messaging, {
           vapidKey: "BFnXNcKiPC0QSPpbTIl0obDCCsmJ89lBBYy4JzKLsGpZmL4VOZWw0VQWCW7TgZmTvcv1GHxpprXFzmFMzhZAAvw"
            
        });
        console.log(token);
        debugger;
         await axios.post('https://192.168.1.6:44325/api/Notification/register-device', {
    userId: 1,
    fcmToken: token,
    deviceType: "android",//getDeviceType(), // "android" | "ios" | "web"
    deviceModel: navigator.userAgent,
    
  });
    }
}// vapidKey: "BMTxVce7i_LXah68LKKAtVHJPi-5EBC-OjSllDpppJ_gviXnXR2C41RBt5rNLa9JWzBvVEC-BS3JM4shpf9UzME"