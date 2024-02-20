function openPopup(imgElement) {
  const modal = document.getElementById("myModal");
  const popupHeader = document.getElementById("popupHeader");
  const popupText = document.getElementById("popupText");
  const popupSubheader = document.getElementById("popupSubheader");

  modal.style.display = "block";
  popupHeader.textContent = "Popup Header";
  popupText.textContent = "This is a paragraph in the popup.";
  popupSubheader.textContent = "Popup Subheader";
}

function closePopup() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}
