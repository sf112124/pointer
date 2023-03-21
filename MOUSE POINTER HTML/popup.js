// Define an array of messages
var messages = [
  "Wow, Keep it up!",
  "You just clicked your mouse pointer!",
  "You're doing great! Keep clicking!",
  "Good job! Let's keep going!",
  "You're a pro at clicking!"
];

// Get the message bubble element
var messageElem = document.getElementById("message");

// Listen for a click event on the Chrome browser
document.body.addEventListener("click", function() {
  // Generate a random message from the array
  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex];

  // Display the message in the message bubble
  messageElem.innerHTML = message;

  // Set a timeout to clear the message after 2 seconds
  setTimeout(function() {
      messageElem.innerHTML = "";
  }, 2000);
});