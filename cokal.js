document.addEventListener("DOMContentLoaded", function() {
    // Theme Toggle Functionality
    const themeButton = document.getElementById("themeButton");
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Toggle theme on button click
    themeButton.addEventListener("click", function() {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            localStorage.setItem("theme", "");
            updateThemeIcon("");
        } else {
            body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme");
            updateThemeIcon("dark-theme");
        }
    });

    // Update theme icon based on current theme
    function updateThemeIcon(theme) {
        const icon = theme === "dark-theme" ? "fa-sun" : "fa-moon";
        themeButton.innerHTML = `<i class="fas ${icon}"></i>`;
    }

    // Countdown Timer Functionality
    const countdownDate = new Date("2025-04-12T23:59:59").getTime(); // Set your launch date here

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.querySelector(".countdown-timer").innerHTML = "<p>We're Live!</p>";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display the timer immediately

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update current date and time every second
    function updateDateTime() {
        const dateTimeElement = document.getElementById('dateTime');
        if (dateTimeElement) {
            const now = new Date();
            const formattedDateTime = now.toLocaleString();
            dateTimeElement.textContent = formattedDateTime;
        }
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call to display the time immediately
});