


const text = document.querySelector(".text");
const cursor = document.querySelector(".cursor");

const textMsg = ["Web Developer", "Game Developer🎮"];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let wordIndex = 0;
let letterIndex = 0;

window.onload = () => {
    setTimeout(type, 250);
};

const type = () => {
    if (letterIndex < textMsg[wordIndex].length) {



        if (!cursor.classList.contains("cursor-typing")) {
            cursor.classList.add("cursor-typing");
        }

        text.textContent += textMsg[wordIndex].charAt(letterIndex);
        letterIndex++;

        setTimeout(type, typingDelay);
    } else {

      setTimeout(function () {
        setTimeout(erase, typingDelay);
      } , 1500);

    }
};

function erase() {

  if (letterIndex > 0) {

text.textContent = textMsg[wordIndex].substring(0 , letterIndex - 1);
letterIndex--;
setTimeout(erase, erasingDelay );

  } else {
   wordIndex++;

   if (wordIndex >= textMsg.length ) wordIndex = 0;
   setTimeout(type, typingDelay + 1100);
  }

}

$(document).ready( function () {
   setTimeout(type, typingDelay );
});
