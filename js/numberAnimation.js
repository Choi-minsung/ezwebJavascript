let _progress = document.querySelector(".progressWrap");
let _bar = _progress.querySelector(".bar");
let _number = _progress.querySelector("span");
let limitNum = _progress.dataset.num;
let dataNum = 0;
console.log(limitNum);

let timerNum = setInterval(function () {
  dataNum++;
  if (dataNum == limitNum) {
    clearInterval(timerNum);
  }
  _bar.style.width = `${dataNum}%`;
  _number.innerText = `${dataNum}%`;
}, 20);

// console.log(dataNum);
