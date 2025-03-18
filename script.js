document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value;
    if (query) {
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    }
});

document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
});

document.getElementById('forward-button').addEventListener('click', function() {
    window.history.forward();
});

document.getElementById('refresh-button').addEventListener('click', function() {
    location.reload();
});

document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
});

document.getElementById('settings-button').addEventListener('click', function() {
    document.getElementById('settings-modal').style.display = 'block';
});

function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
}
