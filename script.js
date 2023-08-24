const image = [
  'image/download (1).jpg',
  'image/download (2).jpg',
  'image/download (3).jpg',
  'image/download.jpg',
  'image/images.jpg'
];

const images = document.querySelector('.images');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const dot = document.querySelectorAll('.index');

let currentIndex = 0;

function updateSlider() {
  images.style.transform = `translateX(-${currentIndex * 100}%)`;
  dot.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

previous.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSlider();
});

next.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, images.children.length - 1);
  updateSlider();
});

dot.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();