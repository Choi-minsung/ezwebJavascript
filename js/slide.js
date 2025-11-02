let slideWp = document.querySelector(".slide-wrapper");
let slidecon = slideWp.querySelector(".slide-container");
let slide = slidecon.querySelectorAll("li");
let page = document.querySelector(".pager");
let slideCount = slide.length;
let currnetIndex = 0;
let timer;
let navPrev = document.querySelector("#prev");
let navNext = document.querySelector("#next");
console.log(slide);
if (slideCount > 0) {
  slide.forEach((slide, idx) => {
    slide.style.left = `${100 * idx}%`;
    page.innerHTML += `<a href="#">${idx}</a>`;
  });
}

let indicator = page.querySelectorAll("a");
// console.log(indicator);
indicator.forEach((indi, idx) => {
  indi.addEventListener("click", function () {
    showmove(idx);
  });
});

// 슬라이드이동함수
function showmove(idx) {
  //이동
  slidecon.style.left = `${-100 * idx}%`;
  currnetIndex = idx;

  //페이저업데이트
  indicator.forEach((item) => {
    item.classList.remove("active");
  });
  indicator[currnetIndex].classList.add("active");
  //슬라이드활성화
  for (sl of slide) {
    sl.classList.remove("active");
  }
  slide[currnetIndex].classList.add("active");
  //좌우버튼 처음 끝일때 비활성
  if (currnetIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
  if (currnetIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }
}

//좌우버튼
navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currnetIndex < slideCount) {
    showmove(currnetIndex + 1);
  }
});
navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  showmove(currnetIndex - 1);
});

showmove(0);

function autoSlide() {
  timer = setInterval(() => {
    let nextIndex = (currnetIndex + 1) % slideCount;
    showmove(nextIndex);
  }, 2000);
}

autoSlide();
slideWp.addEventListener("mouseover", function () {
  clearInterval(timer);
});
slideWp.addEventListener("mouseout", function () {
  autoSlide();
});
