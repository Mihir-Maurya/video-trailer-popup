const btnEl = document.querySelector(".btn");
const trailerContainerEl = document.querySelector(".trailer-container");
const closeIconEL = document.querySelector(".close-icon");
btnEl.addEventListener("click",()=>{
  trailerContainerEl.classList.remove("active");
});
closeIconEL.addEventListener(("click"),()=>{
    trailerContainerEl.classList.add("active");
})