(ratings = document.querySelectorAll(".rating")),
  (sectionOne = document.querySelector(".sec-1")),
  (sectionTwo = document.querySelector(".sec-2")),
  (youSelected = document.querySelector(".you")),
  (submitBtn = document.querySelector(".btn"));

document.querySelector(".sec-2").style.display = "none";

submitBtn.addEventListener("click", submitTask);

let selectedRating;

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function () {
    selectedRating = ratings[i].innerHTML;
  });
}

function submitTask() {
  youSelected.innerHTML = `You selected ${selectedRating} out of 5`;
  document.querySelector(".sec-1").style.display = "none";
  document.querySelector(".sec-2").style.display = "flex";
  document.querySelector(".box-2").style.overflow = "hidden";
}
