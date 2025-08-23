const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        toggle.textContent = "🌙";
    } else {
        toggle.textContent = "🌞";
    }
});