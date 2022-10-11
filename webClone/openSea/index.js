let image_container = document.getElementById("image_container");
let newSlideCount;
let newSlideCount2;

let image_container2 = document.getElementById("image_container2");

let slide = document.querySelectorAll(".imageItem");
let slide2 = document.querySelectorAll(".imageItem2");

let currentIdx = 0;
let currentIdx2 = 0;

let slideCount = slide.length;
let slide2Count = slide2.length;
let preBtn = document.getElementById("prev");
let preBtn2 = document.getElementById("prev2");
let nextBtn = document.getElementById("next");
let nextBtn2 = document.getElementById("next2");
let slideWidth = 530;
let slideLeftMargin = 15;

// image_container.style.width =
//   (slideWidth + slideLeftMargin) * slideCount + slideLeftMargin * 4 + "px";

let moveSlide = function (num) {
  image_container.style.left = -num * 545 + "px";
  currentIdx = num;
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      image_container.classList.remove("animated");
      image_container.style.left = "0px";
      currentIdx = 0;
    }, 400);

    setTimeout(function () {
      image_container.classList.add("animated");
    }, 500);
  }
};

let moveSlide2 = function (num) {
  image_container2.style.left = -num * 545 + "px";
  currentIdx2 = num;
  if (currentIdx2 == slide2Count || currentIdx2 == -slide2Count) {
    setTimeout(function () {
      image_container2.classList.remove("animated");
      image_container2.style.left = "0px";
      currentIdx2 = 0;
    }, 400);

    setTimeout(function () {
      image_container2.classList.add("animated");
    }, 500);
  }
};

nextBtn.addEventListener("click", () => {
  nextBtn.disabled = true;

  moveSlide(currentIdx + 1);

  setTimeout(function () {
    nextBtn.disabled = false;
  }, 700);
});

nextBtn2.addEventListener("click", () => {
  nextBtn2.disabled = true;

  moveSlide2(currentIdx2 + 1);

  setTimeout(function () {
    nextBtn2.disabled = false;
  }, 700);
});

preBtn.addEventListener("click", () => {
  preBtn.disabled = true;
  moveSlide(currentIdx - 1);

  setTimeout(function () {
    preBtn.disabled = false;
  }, 700);
});

preBtn2.addEventListener("click", () => {
  preBtn2.disabled = true;
  moveSlide2(currentIdx2 - 1);

  setTimeout(function () {
    preBtn2.disabled = false;
  }, 700);
});

let updatewidth = function () {
  let currentSlides = document.querySelectorAll(".imageItem");
  newSlideCount = currentSlides.length;
  let newWidth =
    (slideWidth + slideLeftMargin) * newSlideCount + slideLeftMargin * 4 + "px";
  image_container.style.width = newWidth;
};

let updatewidth2 = function () {
  let currentSlides = document.querySelectorAll(".imageItem2");
  newSlideCount2 = currentSlides.length;
  let newWidth =
    (slideWidth + slideLeftMargin) * newSlideCount + slideLeftMargin * 4 + "px";
  image_container2.style.width = newWidth;
};

let setInitial = function () {
  let initialTrans = -(slideWidth + slideLeftMargin) * slideCount + 0.4 + "px";
  image_container.style.transform = "translateX(" + initialTrans + ")";
};

let setInitial2 = function () {
  let initialTrans = -(slideWidth + slideLeftMargin) * slideCount + 0.4 + "px";
  image_container2.style.transform = "translateX(" + initialTrans + ")";
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

  setTimeout(function () {
    image_container.classList.add("animated");
  }, 100);
};

let makeClone2 = function () {
  //a.cloneNode() -> a를  클론,  a.cloneNode(true) -> 자식요소까지 클론
  for (let i = 0; i < slide2Count; i++) {
    let cloneSlide = slide2[i].cloneNode(true);
    cloneSlide.classList.add();
    image_container2.appendChild(cloneSlide);
  }
  for (let i = slide2Count - 1; i >= 0; i--) {
    let cloneSlide = slide2[i].cloneNode(true);
    cloneSlide.classList.add();
    image_container2.prepend(cloneSlide);
  }

  updatewidth2();
  setInitial2();

  setTimeout(function () {
    image_container2.classList.add("animated");
  }, 100);
};

makeClone();
makeClone2();
let auto;
let auto2;
let autoSlide = function () {
  auto = setInterval(() => {
    moveSlide(currentIdx + 1);
  }, 5000);
};
autoSlide();

let autoSlide2 = function () {
  auto2 = setInterval(() => {
    moveSlide2(currentIdx2 + 1);
  }, 5000);
};
autoSlide2();

let stopAutoSlide = function () {
  clearInterval(auto);
};

let stopAutoSlide2 = function () {
  clearInterval(auto2);
};

image_container.addEventListener("mouseover", function () {
  stopAutoSlide();
});

image_container.addEventListener("mouseleave", function () {
  autoSlide();
});

image_container2.addEventListener("mouseover", function () {
  stopAutoSlide2();
});

image_container2.addEventListener("mouseleave", function () {
  autoSlide2();
});

const menu = document.getElementById("menuBar");
const main = document.getElementById("mainCenter");
const testScroll = document.getElementById("test");

function scrollDom(e) {
  menu.scrollTop = Number(e.target.value);
}

const inputText = document.getElementById("search");
const menuSearch = document.getElementById("menuBar_search");

const menuBarIcon = document.querySelectorAll(".menuIcon");
console.log(menuBarIcon);
window.addEventListener("scroll", function () {
  let currentScrollValue = scrollY;
  if (currentScrollValue != 0) {
    menu.style.backgroundColor = "white";
    menu.style.opacity = "1.0";
    menu.style.color = "black";
    for (let i = 0; i < menuBarIcon.length; i++) {
      menuBarIcon[i].style.filter = "none";
    }
    inputText.style.color = "black";
  } else if (currentScrollValue == 0) {
    menu.style.backgroundColor = "rgba(0, 0, 0, 0)";
    menu.style.color = "white";
    inputText.style.color = "white";
    for (let i = 0; i < menuBarIcon.length; i++) {
      menuBarIcon[i].style.filter = "invert()";
    }
  }
  testScroll.innerText = "currentScrollValues is " + currentScrollValue;
});
