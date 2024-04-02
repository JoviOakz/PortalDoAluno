function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Armazena o estado do modo escuro no localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function applyDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    } else {
        body.classList.remove('dark-mode');
        darkModeSwitch.checked = false;
    }
}

// Aplica o modo escuro ao carregar a página
window.onload = applyDarkMode;