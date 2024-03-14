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

document.addEventListener("DOMContentLoaded", function () {
  
    var seeMoreButton = document.getElementById("seeMoreButton");
    var gallery = document.getElementById("gallery");

    // Add click event listener to the button
    seeMoreButton.addEventListener("click", function () {
        
        if (gallery.style.display === "none") {
            gallery.style.display = "block";
            seeMoreButton.textContent = "See Less"; 
        } else {
            gallery.style.display = "none";
            seeMoreButton.textContent = "See More";
        }
    });
});

// Get the logo element
var logo = document.getElementById('logo');

// Listen for the scroll event
window.addEventListener('scroll', function() {
    
    var scrollPosition = window.scrollY;
    var newPosition = scrollPosition * 0.5; 
    
    logo.style.transform = 'translateY(' + newPosition + 'px)';
});