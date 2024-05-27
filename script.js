const messages = [
    { sender: "Matilda", text: "Wishing you a fantastic birthday, Trudy! May your birthday be as radiant as your smile, Trudy! Wishing you endless joy and unforgettable memories on your special day! To the most wonderful friend on her birthday, may every moment be filled with love and laughter! Here's to another year of blessings, laughter, and friendship. Happy birthday, Trudy!" },
    { sender: "Freda", text: "I hope your day is filled with joy, laughter, and your favorite music. Even though we've never met in person, your positivity and spirit have made a lasting impact on me. Enjoy every moment of your special day! I still insist that you go out today! 🥳🥳🥳" },
    { sender: "Dorothy", text: "On this special day, I want to wish you a birthday filled with love, joy, and countless blessings. You are an incredible person with a heart of gold, and your kindness and warmth touch everyone around you. Have a fantastic birthday, Trudy!" },
    { sender: "Grace", text: "You're truly remarkable, always shining bright with your kindness and warmth. Thank you for being an extraordinary partner and for filling every moment with joy and laughter. Your presence in my life is a blessing, and I'm grateful for the bond we share. On your special day, I want to celebrate you, my dear sister. Wishing you a birthday filled with love, laughter, and all the happiness in the world!" },
    { sender: "Abena", text: "Enjoy your special day to the fullest! Sending you warm wishes and big hugs on your birthday, Trudy! May your birthday be a reflection of the love and happiness you bring to others! Celebrating you today and every day. Happy birthday, dear friend! Wishing you a day filled with love, laughter, and all your heart desires. Happy birthday, Trudy!" },
    { sender: "Rosina", text: "Happy Birthday, Trudy! Best wishes! Happy birthday, Trudy! May your day be as bright and beautiful as your heart! Wishing you a year filled with love, laughter, and all the happiness your heart can hold. Cheers to you! May your birthday be a sweet reminder of just how loved and cherished you are. Enjoy every moment, dear friend! Celebrating the amazing person you are today and always. Happy birthday, Trudy! Wishing you the best of everything!" },
    { sender: "Afua", text: "May all your dreams come true this year! Wishing you a birthday filled with love, laughter, and cherished moments. You deserve all the happiness in the world! May this birthday mark the beginning of a year filled with dreams fulfilled and aspirations achieved. Happy birthday, Trudy! Here's to celebrating another year of your incredible journey. May it be as beautiful and inspiring as you are! Sending you warmest wishes on your birthday, Trudy! May this year be your best one yet!" },
    { sender: "Jolly", text: "May your birthday be as special as you are! Happy birthday to the most jovial soul I know! May your day be as bright and cheerful as you are! Here's to another year of adventures, laughter, and unforgettable memories. Cheers to you, Trudy! May your birthday be sprinkled with joy, surrounded by loved ones, and filled with all your favorite things! Sending you smiles, hugs, and all the happiness in the world on your special day. Happy birthday, Trudy!" }
];


const trudyPic = document.getElementById('trudyPic'); // Get reference to the image element
let currentMessageIndex = 0;
let intervalId;

let paused = false; // Variable to track if the message display is paused

document.addEventListener("DOMContentLoaded", function() {
    // Start the celebration when the start button is clicked
    document.getElementById('startButton').addEventListener('click', function() {
        // Hide the start button after clicking
        this.style.display = 'none';
        
        // Start the celebration
        revealMessage();
    });

    // Add event listener for pausing and resuming the message display
    document.getElementById('teamMessage').addEventListener('click', function() {
        if (paused) {
            // If paused, resume showing the messages
            paused = false;
            this.innerText = messages[currentMessageIndex].text;
            showNextMessage();
        } else {
            // If not paused, pause the message display
            paused = true;
            clearTimeout(intervalId); // Clear the timeout to prevent the next message from showing
        }
    });
});

function revealMessage() {
    document.getElementById('birthdayMessage').style.opacity = 1;
    trudyPic.style.display = 'block'; // Display the image
    playBackgroundMusic(); // Start playing the background music
    showNextMessage(); // Display the first message
}

function showNextMessage() {
    if (currentMessageIndex < messages.length) {
        const { sender, text } = messages[currentMessageIndex];
        document.getElementById('teamMessage').innerText = `From ${sender}: ${text}`;
        currentMessageIndex++;
        if (!paused) {
            // If not paused, continue to the next message after 5 seconds
            intervalId = setTimeout(showNextMessage, 5000);
        }
    } else {
        document.getElementById('teamMessage').innerText = "You've seen all the messages!";
        trudyPic.style.display = 'none'; // Hide the image
        showCelebration();
    }
}

function showCelebration() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.onended = function() {
        playBirthdaySong(); // Start playing the birthday song after the background music finishes
        startBalloonsAndStars(); // Start other celebration elements after the background music finishes
    };

    // Start playing the background music
    playBackgroundMusic();
}


function startBalloonsAndStars() {
    const song = document.getElementById('birthdaySong');
    const songDuration = song.duration * 1000; // duration in milliseconds
    
    intervalId = setInterval(addBalloonsAndStars, 1000); // Add elements every second
    
    setTimeout(() => {
        clearInterval(intervalId); // Stop adding elements after the song ends
    }, songDuration);
}

function addBalloonsAndStars() {
    const colors = ['#FFD700', '#800080', '#FF69B4', '#87CEEB', '#FF6347', '#ADFF2F'];
    for (let i = 0; i < 5; i++) { // Adjust number of elements per interval
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.top = window.innerHeight + 'px';
        document.body.appendChild(balloon);
        animateElement(balloon);
    }
    for (let i = 0; i < 5; i++) { // Adjust number of elements per interval
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


function playBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play().catch(error => {
        console.error("Failed to play background music:", error);
    });
}

function stopBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset the playback position
}
