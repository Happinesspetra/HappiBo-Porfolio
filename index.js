/* nav */

const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.right = "0";
};

function close() {
    mainMenu.style.right = "-700px";
};



const myName = "HappiBo Portfolio";
const typingEffect = document.querySelector(".typing-effect");

let i = 0;
const typingInterval = setInterval(() => {
    if (i < myName.length) {
        typingEffect.textContent += myName[i];
        i++;
    } else {
        clearInterval(typingInterval);
    }
}, 100);



const chatbotContainer = document.getElementById('chatbot-container');
const chatMessages = document.getElementById('chat-messages');
const userMessageInput = document.getElementById('user-message');

function toggleChat() {
    chatbotContainer.classList.toggle('expanded');
    if (chatbotContainer.classList.contains('expanded')) {
        userMessageInput.focus();
    }
}

function sendMessage() {
    const userMessage = userMessageInput.value.trim();
    if (userMessage) {
        addMessage('user', userMessage);
        userMessageInput.value = '';
        setTimeout(() => botReply(userMessage), 1000);
    }
}

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(userMessage) {
    const lowercaseMessage = userMessage.toLowerCase();
    let botResponse = "I'm sorry, I don't understand. Can you please rephrase your question?";

    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
        botResponse = "Hello! How can I assist you the today?";
    } else if (lowercaseMessage.includes('project') || lowercaseMessage.includes('work')) {
        botResponse = "I'd be happy to discuss the projects in this portfolio. Which one would you like to know more about?";
    } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('email')) {
        botResponse = "You can contact the portfolio owner through the contact form on the website or via email at michaelhappiness@gmail.com.";
    } else if (lowercaseMessage.includes('experience') || lowercaseMessage.includes('skills')) {
        botResponse = "The portfolio showcases a range of skills including web development, design, and project management. Would you like more details on a specific skill?";
    }

    addMessage('bot', botResponse);
}

userMessageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Prevent chat from toggling when clicking inside the expanded chat
document.getElementById('chat-content').addEventListener('click', function (e) {
    e.stopPropagation();
});


function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display time immediately

function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    // Update time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Update date
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();


const iconPaths = {
    default: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z",
    light: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z",
    dark: "M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
};

function setTheme(theme) {
    document.body.className = theme + '-mode';
    localStorage.setItem('theme', theme);
    updateIcon(theme);
    toggleDropdown();
}

function updateIcon(theme) {
    const iconPath = document.getElementById('icon-path');
    iconPath.setAttribute('d', iconPaths[theme]);
}

function toggleDropdown() {
    document.getElementById("themeDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.theme-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Check for saved theme preference or use default
const savedTheme = localStorage.getItem('theme') || 'default';
setTheme(savedTheme);




// Get the back to top button
const backToTopButton = document.querySelector('.back-to-top');

// Add an event listener to the button
backToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});



document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        setTimeout(() => {
            bar.style.width = `${level}%`;
        }, 300);
    });
});


const soundButton = document.getElementById("sound-button");
const backgroundSound = document.getElementById("background-sound");
const audio = document.getElementById('.backgroundSound');
const icon = document.querySelector('.sound-icon');
let isPlaying = false;

 function toggleSound() {
    if (isPlaying) {
        audio.pause();
        icon.classList.remove('playing');
    } else {
        audio.play();
        icon.classList.add('playing');
    }
    isPlaying = !isPlaying;
};

soundButton.addEventListener("click", () => {
  backgroundSound.play();
});


document.querySelectorAll('.header-item').forEach((item, index) => {
    const text = item.textContent;
    item.innerHTML = '';
    text.split('').forEach((char, charIndex) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.1 + charIndex * 0.1}s`;
        item.appendChild(span);
    });
});


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

// Initialize the first slide
showSlide(0);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
