import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCfe6gH1hazM2Zh82l5UdTJ6GkMp7iKkkQ",
    authDomain: "frb-albumss.firebaseapp.com",
    databaseURL: "https://frb-albumss-default-rtdb.firebaseio.com",
    projectId: "frb-albumss",
    storageBucket: "frb-albumss.appspot.com",
    messagingSenderId: "748744748647",
    appId: "1:748744748647:web:14e68cc2e426efe55f6ec2"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;