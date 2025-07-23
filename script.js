const rocket = document.getElementById("rocket");
const button = document.getElementById("launchBtn");

button.addEventListener("click", () => {
  rocket.style.transform = "translateY(-120vh)";
  button.disabled = true;
  button.innerText = "Launched! 🚀";
});
