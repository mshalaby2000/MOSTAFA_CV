document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dynamic year update in footer
    document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Mostafa Al-Araby Shalaby`;
});
