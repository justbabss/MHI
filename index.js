//Typing effects

const textElement1 = document.getElementById('text1');
const textElement2 = document.getElementById('text2');

const texts = [
  "needy",
  "poor"
];

const charDelay = 300; // Delay between each character (in milliseconds)
const fadeDuration = 0; // Duration of fade animation (in milliseconds)

let currentTextElement = textElement1;

function typeWriter() {
  const text = texts.shift();
  texts.push(text); // Move the text to the end of the array for infinite looping
  if (!text) return;

  let charIndex = 0;
  const typingInterval = setInterval(() => {
    if (charIndex < text.length) {
      currentTextElement.textContent += text[charIndex];
      charIndex++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        currentTextElement.style.opacity = 0;
        setTimeout(() => {
          currentTextElement.textContent = "";
          currentTextElement.style.opacity = 1;
          currentTextElement = (currentTextElement === textElement1) ? textElement2 : textElement1;
          setTimeout(typeWriter, charDelay * 0);
        }, fadeDuration);
      }, charDelay * 10);
    }
  }, charDelay);
}

typeWriter();

