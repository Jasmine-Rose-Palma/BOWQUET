/*
    JavaScript for Bowquet
*/

// Hamburger Menu Function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("bowquet-logo");
    var blogo = document.getElementById("bowquet-logo-black");
    if (menu.style.display === "block" && (logo.style.display === "none" || blogo.style.display === "block")) {
        menu.style.display = "none";
        logo.style.display = "block";
        blogo.style.display = "none";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
        blogo.style.display = "block";
    }
}