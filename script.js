// script.js

// Birthday Countdown
const countdownElement = document.getElementById('countdown');
const birthday = new Date('November 16, 2024 00:00:00').getTime();
const birthdayMessage = document.getElementById('birthdayMessage'); // Get the birthday message element

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // When the countdown is finished, display the birthday message
    if (distance < 0) {
        countdownElement.innerHTML = "Happy Birthday!";
        birthdayMessage.style.display = "block";  // Reveal the birthday message
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Change the message function
function changeMessage() {
    const messages = [
        "Thanks for being an AMAZING dad!!!",
        "Have a fantastic year ahead!",
        "May your days be filled with blessings!",
        "We love you a lot!!",
        "We miss you!!!!",
        "Here's to many more years of happiness!",
        "All the best!!"
    ];
    const message = document.getElementById('message');
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
}
