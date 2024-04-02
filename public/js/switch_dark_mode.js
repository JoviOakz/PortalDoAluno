const themeSwitch = document.getElementById('colorSwitch');

themeSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
});