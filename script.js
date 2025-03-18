// Fenixo Browser - script.js

// Get references to the elements
const settingsButton = document.getElementById('settings-button');
const settingsModal = document.getElementById('settings-modal');
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');
const darkModeButton = document.getElementById('dark-mode-button');
const backButton = document.getElementById('back-button');
const forwardButton = document.getElementById('forward-button');
const refreshButton = document.getElementById('refresh-button');

// Settings Button functionality
if (settingsButton) {
  settingsButton.addEventListener('click', () => {
    if (settingsModal) {
      settingsModal.style.display = settingsModal.style.display === 'block' ? 'none' : 'block';
    }
  });
}

// Search Button functionality
if (searchButton) {
  searchButton.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  });
}

// Dark Mode Button functionality
if (darkModeButton) {
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
  });

  // Check for previous dark mode preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
}

// Back Button functionality
if (backButton) {
  backButton.addEventListener('click', () => {
    window.history.back();
  });
}

// Forward Button functionality
if (forwardButton) {
  forwardButton.addEventListener('click', () => {
    window.history.forward();
  });
}

// Refresh Button functionality
if (refreshButton) {
  refreshButton.addEventListener('click', () => {
    window.location.reload();
  });
}

// Additional buttons or features can be added here
// For example, if you have a home button:
const homeButton = document.getElementById('home-button');
if (homeButton) {
  homeButton.addEventListener('click', () => {
    window.location.href = 'https://www.example.com'; // Set this to your homepage
  });
}
