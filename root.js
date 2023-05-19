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

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (window.scrollY > 300) {
      scrollTopButton.classList.add('visible');
      scrollTopButton.classList.remove('hidden');
    } else {
      scrollTopButton.classList.add('hidden');
      scrollTopButton.classList.remove('visible');
    }
  });
  
  // Scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  


  var text = "Full-Stack Developer"; // Texto que será digitado
  var speed = 100; // Velocidade de digitação (em milissegundos)
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
  
  // Define uma altura fixa para o elemento
  document.getElementById("Fullstack").style.height = "20px";
  
  // Chama a função pela primeira vez
  typeWriter();
  