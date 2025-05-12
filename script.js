// Toggle content visibility
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    content.classList.toggle('hidden');
}

// Sticky navbar on scroll
window.onscroll = function() {stickNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function startChat() {
    document.getElementById('chatWindow').classList.remove('hidden');
}

function sendMessage() {
    const messageInput = document.getElementById('chatInput');
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
        const messageContainer = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = messageText;
        messageContainer.appendChild(newMessage);
        messageInput.value = ""; // Clear input field after sending
        messageContainer.scrollTop
    }}

// Toggle visibility of additional content (like study resources)
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    content.classList.toggle('hidden');
}

// Start the chat interaction (toggle chat window)
function startChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('hidden');
}

// Send a message in the chat (just a placeholder for now)
function sendMessage() {
    const messageInput = document.getElementById('chatInput');
    const messageContainer = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = messageInput.value;
    messageContainer.appendChild(newMessage);
    messageInput.value = '';  // Clear the input after sending
}


// Animating sections when they come into view
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionPosition < windowHeight - 100) {
            section.style.opacity = 1;
            section.style.animation = 'fadeInSection 1s forwards';
        }
    });
});
