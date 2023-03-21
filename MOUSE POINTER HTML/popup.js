const messages = [
    "Is this real?",
    "Life is an illusion",
    "You only ever see your own consciousness",
    "Everything is just a thought"
];

document.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById("message");
    messageElement.innerText = messages[randomIndex];
});
