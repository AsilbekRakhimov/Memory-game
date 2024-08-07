const gameWrapper = document.querySelector(".game");

const pictures = [
  "../public/images/cow.png",
  "../public/images/blue_fish.jpeg",
  "../public/images/carcidon.jpeg",
  "../public/images/dolphin.jpeg",
  "../public/images/duck.jpeg",
  "../public/images/fish.png",
  "../public/images/giraffe.png",
  "../public/images/goat.png",
  "../public/images/horse.jpeg",
  "../public/images/lion.jpeg",
  "../public/images/tiger.jpeg",
  "../public/images/toshbaqa.png",
  "../public/images/cow.png",
  "../public/images/blue_fish.jpeg",
  "../public/images/carcidon.jpeg",
  "../public/images/dolphin.jpeg",
  "../public/images/duck.jpeg",
  "../public/images/fish.png",
  "../public/images/giraffe.png",
  "../public/images/goat.png",
  "../public/images/horse.jpeg",
  "../public/images/lion.jpeg",
  "../public/images/tiger.jpeg",
  "../public/images/toshbaqa.png",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray(pictures);

const len = shuffledArray.length;

for (let i = 0; i < len; i++) {
  let box = document.createElement("box");
  box.className = 'item'
  box.innerHTML += `<img src="${shuffledArray[i]}" alt = "Bu yerda rasm bor" >`
  

  box.onclick = function () {
    box.classList.add("boxOpen");

    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };

  document.querySelector(".game").appendChild(box);
}
