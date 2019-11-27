import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCslnbVLrzh4BItYc2w8Lu96MZF0UH8lkU",
    authDomain: "masterclass-event-mvp.firebaseapp.com",
    databaseURL: "https://masterclass-event-mvp.firebaseio.com",
    projectId: "masterclass-event-mvp",
    storageBucket: "masterclass-event-mvp.appspot.com",
    messagingSenderId: "295413546593",
    appId: "1:295413546593:web:d88374ee203c43e2f77420",
    measurementId: "G-LNEFNFZ24E"
  };
// safe to keep this above info on front-end due to Firebase security
  firebase.initializeApp(firebaseConfig);
  firebase.performance(); // adding this line adds performance analytics
  firebase.analytics();