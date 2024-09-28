// JavaScript for toggling the navigation menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});


function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open'); // Toggles the 'open' class to show or hide the menu
}