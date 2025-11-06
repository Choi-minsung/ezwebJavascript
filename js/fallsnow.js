const snowContent = ["&#10052;", "&#10053;", "&#10054;"];
const snowContainer = document.querySelector("#snow-container");
let isSnow = true;
const random = (num) => {
  return Math.floor(Math.random() * num);
};

const getRandomStyle = () => {
  const top = random(100);
  const left = random(100);
  const duration = random(10) + 10;
  const size = random(25) + 25;
  return `
    top:-${top}%;
    left:${left}%;
    font-size:${size}px;
    animation-duration:${duration}s;
  `;
};
const createSnow = (num) => {
  let i = 0;
  // snowContent.style.opacity = 1;
  while (i < num) {
    let snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyle();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
    i++;
  }
};

window.addEventListener("load", () => {
  createSnow(30);
});

const removeSnow = () => {
  // snowContainer.style.opacity = 0;
  setTimeout(() => {
    snowContainer.querySelectorAll(".snow").forEach((snow) => {
      snow.remove();
    });
  }, 500);
};

window.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  isSnow ? removeSnow() : createSnow(30);
  isSnow = !isSnow;
});
