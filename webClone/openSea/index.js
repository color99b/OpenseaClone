let image_container = document.getElementById("image_container");
let newSlideCount;

let slide = document.querySelectorAll(".imageItem");
let currentIdx = 0;
let slideCount = slide.length;
let preBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let slideWidth = 530;
let slideLeftMargin = 15;

// image_container.style.width =
//   (slideWidth + slideLeftMargin) * slideCount + slideLeftMargin * 4 + "px";

let moveSlide = function (num) {
  image_container.style.left = -num * 545 + "px";
  currentIdx = num;
  if (currentIdx == slideCount) {
    image_container.style.left = "0px";
    currentIdx = 0;
  }
};

nextBtn.addEventListener("click", () => {
  if (currentIdx < newSlideCount - 3) {
    moveSlide(currentIdx + 1);
  }
});

preBtn.addEventListener("click", () => {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  }
});

let updatewidth = function () {
  let currentSlides = document.querySelectorAll(".imageItem");
  newSlideCount = currentSlides.length;
  let newWidth =
    (slideWidth + slideLeftMargin) * newSlideCount + slideLeftMargin * 4 + "px";
  image_container.style.width = newWidth;
};

let setInitial = function () {
  let initialTrans = -(slideWidth + slideLeftMargin) * slideCount + 0.4 + "px";
  image_container.style.transform = "translateX(" + initialTrans + ")";
};

let makeClone = function () {
  //a.cloneNode() -> a를  클론,  a.cloneNode(true) -> 자식요소까지 클론
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add();
    image_container.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add();
    image_container.prepend(cloneSlide);
  }
  updatewidth();
  setInitial();
};

makeClone();
