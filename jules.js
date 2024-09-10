

const Xmark = document.querySelector(".xmark");
const hamburg = document.querySelector(".hamburger");
const items = document.querySelector(".items");
// function hamburger('onclick'){
hamburg.addEventListener("click", function(){
  items.classList.add("itemshoe");
});
Xmark.addEventListener("click", function (){
  items.classList.remove("itemshoe");
});
