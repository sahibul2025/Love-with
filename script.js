const scrollingText = document.getElementById('scrollingText');
const textStyles = [
  { fontSize: '3rem', color: 'white' },
  { fontSize: '4rem', color: '#ff7eb3' },
  { fontSize: '5rem', color: '#ff758c' },
  { fontSize: '3.5rem', color: '#57ff57' }
];

const messages = ['Sahibul', '+', 'Sorna', 'Forever ❤️'];

let currentIndex = 0;

// Function to create scrolling text
function updateScrollingText() {
  scrollingText.innerHTML = ''; // Clear previous text
  const textItem = document.createElement('div');
  textItem.className = 'text-item';
  textItem.textContent = messages[currentIndex];

  // Apply random style
  const randomStyle = textStyles[Math.floor(Math.random() * textStyles.length)];
  textItem.style.fontSize = randomStyle.fontSize;
  textItem.style.color = randomStyle.color;

  scrollingText.appendChild(textItem);

  // Cycle through messages
  currentIndex = (currentIndex + 1) % messages.length;
}

// Update text every 2 seconds
setInterval(updateScrollingText, 2000);

// Image effects (toggle class for additional styles)
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

setInterval(() => {
  image1.classList.toggle('active');
  image2.classList.toggle('active');
}, 3000);
