document.addEventListener("DOMContentLoaded", function () {
    console.log("CV Website Loaded Successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Dark Mode Toggle
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.innerText = "🌙 Dark Mode";
    toggleThemeBtn.classList.add("theme-toggle");
    document.body.appendChild(toggleThemeBtn);

    toggleThemeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleThemeBtn.innerText = "☀️ Light Mode";
        } else {
            toggleThemeBtn.innerText = "🌙 Dark Mode";
        }
    });

    // Dynamic Year Update in Footer
    document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Mostafa Al-Araby Shalaby`;
});
