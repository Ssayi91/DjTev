document.addEventListener("DOMContentLoaded", function() {
    var song = document.getElementById("song");
    var PlayPauseButton = document.getElementById("PlayPauseButton");
    var isPlaying = false;

    playPauseButton.onclick = function() {
        if (isPlaying) {
            song.pause();
            playPauseButton.classList.remove("fa-pause");
            playPauseButton.classList.add("fa-play");
        } else {
            song.play();
            playPauseButton.classList.remove("fa-play");
            playPauseButton.classList.add("fa-pause");
        }
        isPlaying = !isPlaying;
    };
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the logo element
var logo = document.getElementById('logo');

// Listen for the scroll event
window.addEventListener('scroll', function() {
    // Calculate the new position for the logo based on the scroll position
    var scrollPosition = window.scrollY;
    var newPosition = scrollPosition * 0.5; // Adjust the multiplier as needed
    
    // Apply the new position to the logo
    logo.style.transform = 'translateY(' + newPosition + 'px)';
});