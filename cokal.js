document.addEventListener("DOMContentLoaded", function() {
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
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        dateTimeElement.textContent = formattedDateTime;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call to display the time immediately
});
