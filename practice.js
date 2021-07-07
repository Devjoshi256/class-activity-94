 var firebaseConfig = {
    apiKey: "AIzaSyBjDCdovQOjW6tTOCkkDfz-uGEXJNGrKSg",
    authDomain: "test-49996.firebaseapp.com",
    databaseURL: "https://test-49996-default-rtdb.firebaseio.com",
    projectId: "test-49996",
    storageBucket: "test-49996.appspot.com",
    messagingSenderId: "798927263699",
    appId: "1:798927263699:web:e305338c6f7c1f22f40126",
    measurementId: "G-862RBG5B9L"
  };
firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :"adding user"
    })
}