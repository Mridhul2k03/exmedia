function toggleNav() {
    var navWidth = document.getElementById("mySidenav").style.width;
    if (navWidth === "200px") {
        closeNav();
    } else {
        openNav();
    }
}