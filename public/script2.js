const messages = [
    { sender: "Matilda", text: "Wishing you a fantastic birthday, Trudy!" },
    { sender: "Freda", text: "Hope your day is filled with joy and laughter!" },
    { sender: "Dorothy", text: "On this special day, I want to wish you a birthday filled with love, joy, and countless blessings. You are an incredible person with a heart of gold, and your kindness and warmth touch everyone around you. Have a fantastic birthday, Trudy!" },
    { sender: "Grace", text: "You're truly remarkable, always shining bright with your kindness and warmth. Thank you for being an extraordinary partner and for filling every moment with joy and laughter. Your presence in my life is a blessing, and I'm grateful for the bond we share. On your special day, I want to celebrate you, my dear sister. Wishing you a birthday filled with love, laughter, and all the happiness in the world." },
    { sender: "Abena", text: "Enjoy your special day to the fullest!" },
    { sender: "Rosina", text: "Happy Birthday, Trudy! Best wishes!" },
    { sender: "Afua", text: "May all your dreams come true this year!" },
    { sender: "Jolly", text: "May your birthday be as special as you are!" }
];

const trudyPic = document.getElementById('trudyPic'); // Get reference to the image element
let currentMessageIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    revealMessage();
});

function revealMessage() {
    document.getElementById('birthdayMessage').style.opacity = 1;
    trudyPic.style.display = 'block'; // Display the image
    setTimeout(showNextMessage, 5000); // Display next message after 5 seconds
}

function showNextMessage() {
    if (currentMessageIndex < messages.length) {
        const { sender, text } = messages[currentMessageIndex];
        document.getElementById('teamMessage').innerText = `From ${sender}: ${text}`;
        currentMessageIndex++;
        setTimeout(showNextMessage, 5000); // Display next message after 5 seconds
    } else {
        document.getElementById('teamMessage').innerText = "You've seen all the messages!";
        trudyPic.style.display = 'none'; // Hide the image
        showCelebration();
    }
}

function showCelebration() {
    addBalloonsAndStars();
    playBirthdaySong();
}

function addBalloonsAndStars() {
    const colors = ['#FFD700', '#800080', '#FF69B4', '#87CEEB', '#FF6347', '#ADFF2F'];
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.top = window.innerHeight + 'px';
        document.body.appendChild(balloon);
        animateElement(balloon);
    }
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = window.innerHeight + 'px';
        document.body.appendChild(star);
        animateElement(star);
    }
}

function animateElement(element) {
    const duration = Math.random() * 5 + 5;
    const animation = element.animate([
        { transform: 'translateY(0)' },
        { transform: `translateY(-${window.innerHeight + 100}px)` }
    ], {
        duration: duration * 1000,
        iterations: 1,
        easing: 'ease-in-out'
    });

    animation.onfinish = () => {
        element.remove();
    };
}

function playBirthdaySong() {
    const song = document.getElementById('birthdaySong');
    song.play().catch(error => {
        console.error("Failed to play audio:", error);
    });
}
