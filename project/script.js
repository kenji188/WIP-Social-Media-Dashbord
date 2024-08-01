document.addEventListener('DOMContentLoaded', () => {
    const toggleWrapper = document.querySelector('.toggle__wrapper');
    const darkModeRadio = document.getElementById('dark');
    const lightModeRadio = document.getElementById('light');

    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            darkModeRadio.checked = true;
            document.body.classList.add('dark-mode');
        } else {
            lightModeRadio.checked = true;
            document.body.classList.remove('dark-mode');
        }
    }

    toggleWrapper.addEventListener('click', () => {
        if (darkModeRadio.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
