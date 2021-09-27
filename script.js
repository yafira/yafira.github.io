// dark mode

// wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme')
    const themeToggle = document.getElementById('theme-toggle')
    themeToggle.addEventListener('click', () => {
      // if it's light -> go dark
    if (themeStylesheet.href.includes('light')) {
        themeStylesheet.href = 'dark-theme.css'
        themeToggle.innerText = 'Switch to light mode'
    } else {
        // if it's dark -> go light
        themeStylesheet.href = 'light-theme.css'
        themeToggle.innerText = 'Switch to dark mode'
        }
    })
})

// modal window
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
};