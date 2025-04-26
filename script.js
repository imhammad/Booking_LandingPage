const track = document.getElementById('track');
const cards = document.querySelectorAll('.card');
let index = 0;

function moveCarousel() {
  index++;
   if (index >= cards.length) {
     index = 0;
   }
   track.style.transform = `translateX(-${index * 400}px)`;
}
setInterval(moveCarousel, 3000);

const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh
    successMessage.style.display = 'block';

    form.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 7000);
  });