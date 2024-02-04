let rightButton = document.querySelector(".right-button");
let image = document.querySelectorAll(".track img");
let track = document.querySelector(".track");

let i = 0;
let widthImg = 250;
rightButton.addEventListener("click", () => {
  i += widthImg;
  if (i === widthImg * (image.length - 2)) {
    i = 0;
  }
  track.style.transform = `translateX(-${i}px)`;
});
