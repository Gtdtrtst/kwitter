
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA6vy-ZuYq0H5IHGspBlBUEy69iGklw7bE",
      authDomain: "kwitter-b70b4.firebaseapp.com",
      databaseURL: "https://kwitter-b70b4-default-rtdb.firebaseio.com",
      projectId: "kwitter-b70b4",
      storageBucket: "kwitter-b70b4.appspot.com",
      messagingSenderId: "661118804756",
      appId: "1:661118804756:web:31a5449a2e6d30463fd801"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  "+ user_name + "!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData()
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name="+Room_names);
row="<div class='room_name'id="+Room_names + " onclick='redirecttoRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}