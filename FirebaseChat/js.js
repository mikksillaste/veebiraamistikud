var loggedInUser
var name, email, photoUrl, uid, emailVerified;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBGA3JsgKE2UBMI_BDMnHQR6LIYCDOd_go",
  authDomain: "sliits-47a67.firebaseapp.com",
  databaseURL: "https://sliits-47a67.firebaseio.com",
  projectId: "sliits-47a67",
  storageBucket: "sliits-47a67.appspot.com",
  messagingSenderId: "770037649403"
};
firebase.initializeApp(config);

$('#logArea #register').on("click", function() {
  var email = $('#email').val()
  var password = $('#password').val()
  var encrypted = CryptoJS.AES.encrypt(password, "Secret Passphrase").toString();
  firebase.auth().createUserWithEmailAndPassword(email, encrypted).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    $('#vastus').html('Code: ' + errorCode + " message: " + errorMessage)
  });
})
$('#logArea #login').on("click", function() {
  var email = $('#email').val()
  var password = $('#password').val()
  var encrypted = CryptoJS.AES.encrypt(password, "Secret Passphrase").toString();

  firebase.auth().signInWithEmailAndPassword(email, encrypted).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    $('#vastus').html('Code: ' + errorCode + " message: " + errorMessage)
  });
})

function setUserData() {
  $('#userData #displayName').val(name)
  $('#userData #email').val(email)
  $('#userData #photoURL').val(photoUrl)
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user != null) {
    loggedInUser = user
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
    console.log(name, email, photoUrl, uid, emailVerified)
    $('#logArea').css("display", "none")
    if (name == "null") {
      $('#vastus').html("")
      $('#userData').css("display", "block")
      setUserData();
    } else {
      $('#chatWindow').css("display", "block")
    }
  }
});

$('#userData #changeData').on('click', function() {
  newName = $('#userData #displayName').val()
  newEmail = $('#userData #email').val()
  newURL = $('#userData #photoURL').val()
  if (newEmail != '') {
    setEmail(newEmail)
  }

  if (newURL != '') {
    setData({ photoUrl: newURL })
  }
  if (newName != '') {
    setData({ displayName: newName })
  }
  if (name != '') {
    openChat()
  }
})

function openChat() {
  $('#userData').css("display", "none")
  $('#chatWindow').css("display", "block")
}

function setData(object) {
  loggedInUser.updateProfile(object)
    .then(function() {
      // Update successful.
      console.log(object)
    })
    .catch(function(error) {
      // An error happened.

    });
}

function setEmail(email) {
  loggedInUser.updateEmail(email)
    .then(function() {
      // Update successful.

    })
    .catch(function(error) {
      // An error happened.

    });
}
$('#chatWindow #sendText').on('click', function() {
  var mess = $('#chatWindow #textArea').val()
  $('#chatWindow #textArea').val("")
  mess = mess.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  var data = {
    "name": name,
    "message": mess,
    "timestamp": firebase.database.ServerValue.TIMESTAMP
  }
  console.log(data)
  var key = firebase.database().ref().child("messages").push(data);
})

firebase.database().ref().child("messages").on(
  "child_added",
  function(kirjeviit) {
    // console.log(kirjeviit)
    var prevText = $("#vastus").html()
    var newText = 
    kirjeviit.val().name.replace(/</g, "&lt;").replace(/>/g, "&gt;") + ": " +
    kirjeviit.val().message.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
    "</br>"
    $("#vastus").html(prevText + newText)
  });

$("#muudaInfot").on('click', function() {
  $('#userData').css("display", "block")
  $('#chatWindow').css("display", "none")
  $('#vastus').html("")
})

// {
//   "rules": {
//     ".write": true,
//     "messages": {
//       ".read": true,
//       "$id":{
//         ".validate": "newData.hasChildren(['name', 'message', 'timestamp'])",
//         "name": {
//           ".validate": "newData.isString() && newData.val().length < 100"
//         },
//         "message": {
//           ".validate": "newData.isString() && newData.val().length < 100"
//         },
//         "timestamp": { 
//           ".validate": "newData.val() <= now"
//         },
//         // no other fields can be included in a message
//         "$other": {
//           ".validate": false
//         }
//       }
//     }
//   }
// }