// 1. Initialize Firebase

var config = {
    apiKey: "AIzaSyDllV7sVVZU-dRV64_gFh7cl1Tgr0VFmw4",
    authDomain: "project1-a480f.firebaseapp.com",
    databaseURL: "https://project1-a480f.firebaseio.com",
    projectId: "project1-a480f",
    storageBucket: "project1-a480f.appspot.com",
    messagingSenderId: "1033264567214"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  
  // 2. Button for adding Pets
  $("#addContact-btn").on("click", function(event) {
  event.preventDefault();
  
  // Grabs user input
  var firstName        = $("#firstName").val().trim();
  var lastName         = $("#lastName").val().trim();
  var email            = $("#email").val().trim();
  var phoneNumber      = $("#phoneNumber").val().trim();
  var message          = $("#message").val().trim();
  
  // Creates local "temporary" object for holding employee data
  var newContact = {
    firstName   : firstName,
    lastName    : lastName,
    email       : email,
    phoneNumber : phoneNumber,
  message     : message
  };
  
  // Uploads employee data to the database
  database.ref().push(newContact);
  
  // Alert
  // alert("Contact successfully added");
  
  // Clears all of the text-boxes
  $("#firstName").val("");
  $("#lastName").val("");
  $("#email").val("");
  $("#phoneNumber").val("");
  $("#message").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  
  console.log(childSnapshot.val());
  
   //Store everything into a variable.
  var firstName = childSnapshot.val().firstName;
  var lastName = childSnapshot.val().lastName;
  var email = childSnapshot.val().email;
  var phoneNumber = childSnapshot.val().phoneNumber;
  var message = childSnapshot.val().message;
  
  
  // Contact Info
  /*   console.log("the first name from firebase is: " + firstName);
  console.log("the last name from firebase is: " + lastName);
  console.log("the email from firebase is: " + email);
  console.log("the phone number from firebase is: " + phoneNumber);
  console.log("the message from firebase is: " + message);  */
  
  alert("We added the following contact information for you.  First Name: " + firstName + " Last Name: " + lastName + " Email Address: " + email
  + " Phone Number: " + phoneNumber + " Message: " + message);
  
  //  document.getElementById("firstName").value = firstName;
  
  });
  