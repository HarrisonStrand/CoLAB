  import firebase from 'firebase/app';
	import 'firebase/firestore'
	import 'firebase/auth'
	
	// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDZIiC5brUQvMARStXhDDK-M9idl7lY4ew",
    authDomain: "colab-b2480.firebaseapp.com",
    projectId: "colab-b2480",
    storageBucket: "colab-b2480.appspot.com",
    messagingSenderId: "1004422545861",
    appId: "1:1004422545861:web:cef1a33ace9f8481904bac",
    measurementId: "G-BRFJMMCRRH"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
	firebase.firestore().settings({ timestampsInSnapshots: true });

	export default firebase;