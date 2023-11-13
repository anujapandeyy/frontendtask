function loadContent() {
  document.getElementById("loadButton").style.display = "none";
  // Show the hidden content
  document.getElementById("hiddenContent").style.display = "block";
}
//for the slide of images
const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImage();
};

const goNext = () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
//for the toggle images

const img = document.getElementById("images");
let toggle = true;
img.addEventListener("click", function () {
  toggle = !toggle;
  if (toggle) {
    img.src =
      "https://media.istockphoto.com/id/1155230429/vector/click-button-with-hand-pointer-clicking-click-me-vector-web-button-isolated-website-yellow.jpg?s=612x612&w=0&k=20&c=fasVBkTP5941Qo7miTDeiF3UlHJtH3WrOLQdW6soePo=";
  } else {
    img.src = "https://static.toiimg.com/photo/83929360.cms";
  }
});
