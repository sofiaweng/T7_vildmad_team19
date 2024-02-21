function openPopup(imgElement) {
  const modal = document.getElementById("myModal");
  const popupTitle = document.getElementById("title");
  const popupDescription = document.getElementById("description");
  const popupLandscape = document.getElementById("landscape");
  const popupImage = document.getElementById("billede");

  modal.style.display = "block";
  popupTitle.textContent = imgElement.querySelector(".title").textContent;

  // Set the content of description and landscape elements
  popupDescription.textContent =
    imgElement.querySelector(".description").textContent;
  popupLandscape.textContent =
    imgElement.querySelector(".landscape").textContent;

  popupImage.src = imgElement.querySelector(".gridItem").src;
}

function closePopup() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Event listener to close the popup when clicking outside the modal
document.getElementById("myModal").addEventListener("click", function (event) {
  // Check if the clicked element is the modal overlay
  if (event.target === this) {
    closePopup(); // Close the popup if the clicked element is the overlay
  }
});
