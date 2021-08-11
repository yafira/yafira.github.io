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

// about-more, about-less buttons
const aboutMore = document.querySelector('.about-more')
const aboutLess = document.querySelector('.about-less')
const about = document.querySelector('.about')

aboutMore.addEventListener('click', () => {
    about.classList.remove('hide')
    aboutMore.classList.add('hide')
})

aboutLess.addEventListener('click', () => {
    about.classList.add('hide')
    aboutLess.classList.remove('hide')
})