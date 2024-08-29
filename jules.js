// let Show = document.getElementById("ShowMe");

// Show.addEventListener("click", closeIt);

// function closeIt() {
//   let headerDisplay = document.getElementById("Header-list");

//   headerDisplay.style.display =
//     headerDisplay.style.display === "none" || headerDisplay.style.display === ""
//       ? "block"
//       : "none";
// }

document.getElementById("x").onclick = function () {
  document.querySelector(".container");
  container.style.width = "0%";
};

document.getElementById("ShowMe").onclick = function () {
  document.querySelector(".container").classList.add("container");
};
