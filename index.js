
// Arrastar galeria de categorias
const cardsContainer = document.querySelector(".container-drag");
let isDragging = false;
let startPosX = 0;
let currentTranslateX = 0;
let prevTranslateX = 0;
let animationID;

cardsContainer.addEventListener("mousedown", (e) => {
  if (window.innerWidth >= 1000) return;

  isDragging = true;
  startPosX = e.clientX - cardsContainer.getBoundingClientRect().left;
  currentTranslateX = prevTranslateX;
  cancelAnimationFrame(animationID);
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const mouseX = e.clientX - cardsContainer.getBoundingClientRect().left;
  const offsetX = mouseX - startPosX;
  currentTranslateX = prevTranslateX + offsetX;

  cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;
});

document.addEventListener("mouseup", () => {
  if (!isDragging) return;

  isDragging = false;
  startPosX = 0;
  prevTranslateX = currentTranslateX;
});

function slideAnimation() {
  const targetTranslateX = currentTranslateX * 0.9;
  currentTranslateX = targetTranslateX;
  cardsContainer.style.transform = `translateX(${currentTranslateX}px)`;

  if (Math.abs(targetTranslateX) > 0.5) {
    animationID = requestAnimationFrame(slideAnimation);
  } else {
    prevTranslateX = currentTranslateX;
  }
}
