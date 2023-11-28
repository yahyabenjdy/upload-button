const realBtn = document.getElementById("real-btn");
const tempImg = document.getElementById("temp-img");
const tempLabel = document.getElementById("temp-label");

realBtn.addEventListener("change", () => {
  tempLabel.textContent = realBtn.files[0].name;
  tempImg.src = URL.createObjectURL(realBtn.files[0]);
});
