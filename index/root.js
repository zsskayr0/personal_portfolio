// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Check scroll position and show/hide both the scroll-bar and the scroll-to-top button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollTopButton = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.classList.remove("hidden");
  } else {
    scrollTopButton.classList.add("hidden");
  }
}

window.addEventListener('scroll', function() {
  var body = document.body;

  if (body.scrollTop === 0) {
    body.classList.add('hide-scrollbar');
  } else {
    body.classList.remove('hide-scrollbar');
  }
});


// Smoothly scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Typewriter effect
var text = "Full-Stack Developer"; // Text to be typed
var speed = 100; // Typing speed (in milliseconds)
var i = 0;

function typeWriter() {
  var element = document.getElementById("Fullstack");
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  var element = document.getElementById("Fullstack");
  if (i >= 0) {
    var newText = element.innerHTML.slice(0, -1);
    element.innerHTML = newText;
    i--;
    setTimeout(eraseText, speed);
  } else {
    setTimeout(typeWriter, 2000);
  }
}

// Set a fixed height for the element
document.getElementById("Fullstack").style.height = "20px";

// Call the function for the first time
typeWriter();