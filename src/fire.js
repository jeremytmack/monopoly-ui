import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDeYsL03nrbLjLtBLIXMQ66D6orzJiI8wA",
  authDomain: "monopoly-ef8b6.firebaseapp.com",
  databaseURL: "https://monopoly-ef8b6.firebaseio.com",
  projectId: "monopoly-ef8b6",
  storageBucket: "monopoly-ef8b6.appspot.com",
  messagingSenderId: "242561613483",
  appId: "1:242561613483:web:0f9c09ab46faeba8ca41ee",
  measurementId: "G-MLFRQQ1M77"
};
var fire = firebase.initializeApp(config);
export default fire;
