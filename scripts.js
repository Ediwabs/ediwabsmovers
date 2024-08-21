// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when scrolled down 100px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll to top when the button is clicked
backToTopBtn.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


