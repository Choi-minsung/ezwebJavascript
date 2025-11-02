let _progress = document.querySelector(".progressWrap");
let dataNum = 0;
let limitNum = Number(_progress.dataset.num);
let _bar = _progress.querySelector(".bar");
let _number = _progress.querySelector("span");

let isAni = false;
let timerNum;

let _progressOffset = _progress.offsetTop;
let winHeight = window.innerHeight / 2;
function anibar() {
  timerNum = setInterval(function () {
    dataNum++;
    if (dataNum == limitNum) {
      clearInterval(timerNum);
    }
    _bar.style.width = `${dataNum}%`;
    _number.innerText = `${dataNum}%`;
  }, 20);
}

window.addEventListener("scroll", function () {
  if (_progressOffset - winHeight < document.documentElement.scrollTop) {
    if (!isAni) {
      anibar();
      isAni = true;
    }
  }
});
// console.log(dataNum);
