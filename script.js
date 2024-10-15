const themeSwitchBtn = document.querySelector('.navbar__theme-button');
const themeSwitchIcon = document.querySelector('.navbar__theme-button-icon');

// Get the current theme from localStorage
const currentTheme = localStorage.getItem('theme');

// Function to set the theme based on the given value
function setTheme(theme) {
    document.body.classList.remove('dark-theme', 'white-theme');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    themeSwitchIcon.textContent = theme === 'dark-theme' ? '🌙' : '🔆';
}

// Check if a theme is already set in localStorage
if (currentTheme) {
    setTheme(currentTheme);
} else {
    // Fallback to the browser's preferred color scheme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDarkMode ? 'dark-theme' : 'white-theme';
    setTheme(defaultTheme);
}

// Add click event to the button for switching themes
themeSwitchBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-theme') ? 'white-theme' : 'dark-theme';
    setTheme(newTheme);
});



// // Toggle theme on button click
// themeSwitcher.addEventListener('click', () => {
//     document.body.classList.toggle('white-theme');
//     logo.style.filter = 'invert(0)';

//     if(currentTheme === "dark-theme") {
//         themeSwitcherIcon.textContent = '🌙';
//     } else if (currentTheme === "white-theme") {
//         themeSwitcherIcon.textContent = '🔆';
//     }

//     let theme = 'dark-theme';
//     if (document.body.classList.contains('white-theme')) {
//         theme = 'white-theme';
//         logo.style.filter = 'invert(1)';
//     }
//     // Save the theme in localStorage
//     localStorage.setItem('theme', theme);

// });

