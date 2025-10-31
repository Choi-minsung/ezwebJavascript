let _progress = document.querySelectorAll(".progressWrap");

_progress.forEach((item) => {
  anibar(item);
});

function anibar(grph) {
  let dataNum = 0;
  let limitNum = grph.dataset.num;
  let _bar = grph.querySelector(".bar");
  let _number = grph.querySelector("span");
  let timerNum = setInterval(function () {
    dataNum++;
    if (dataNum == limitNum) {
      clearInterval(timerNum);
    }
    _bar.style.width = `${dataNum}%`;
    _number.innerText = `${dataNum}%`;
  }, 20);
}

// console.log(dataNum);
