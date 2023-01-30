const openPopupButton = document.getElementById("open-popup-button");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup-button");

openPopupButton.addEventListener("click", function() {
  popup.style.display = "flex";
});

closePopupButton.addEventListener("click", function() {
  popup.style.display = "none";
});

popup.addEventListener("click", function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
