
// MOBILE NAVIGATION
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("open");
}

// DARK MODE
function toggleTheme() {
    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");

    localStorage.setItem(
        "compassionTheme",
        dark ? "dark" : "light"
    );

    document.querySelectorAll(".theme-btn").forEach(button => {
        button.textContent = dark ? "☀️" : "🌙";
    });
}

// LOAD SAVED THEME ON EVERY PAGE
function loadTheme() {
    const saved = localStorage.getItem("compassionTheme");

    if (saved === "dark") {
        document.body.classList.add("dark");

        document.querySelectorAll(".theme-btn").forEach(button => {
            button.textContent = "☀️";
        });
    }
}

loadTheme();

// INSPIRATION GENERATOR
const quotes = [
    "Be kind. Every person matters! 💚",
    "Your kindness can change someone's day! ❤️",
    "Together we can make the world better! 🌍",
    "Small acts of love create big changes! 🤝",
    "Compassion makes humanity stronger! 🌱"
];

function newQuote() {
    const quote = quotes[
        Math.floor(Math.random() * quotes.length)
    ];

    const quoteElement = document.getElementById("quote");

    if (quoteElement) {
        quoteElement.textContent = quote;
    }
}

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const feedback = document.getElementById("formMessage");

        feedback.textContent =
            "Thank you, " + name +
            "! 💚 Your message has been received in this demo.";

        contactForm.reset();
    });
}
