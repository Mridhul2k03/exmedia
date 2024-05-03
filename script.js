function openPopup() {
    document.getElementById("pContainer").style.display = "block";
    $('#pContainer').modal('show');
  }

  function closePopup() {
  document.getElementById("pContainer").style.display = "none";
  }
  function toggleNav() {
    var navWidth = document.getElementById("mySidenav").style.width;
    var menuIcon = document.getElementById('menu-icon');

    if (navWidth === "200px") {
        closeNav();
        menuIcon.innerHTML = '&#9776;'; // Change back to hamburger icon
    } else {
        openNav();
        menuIcon.innerHTML = '&#9747;'; // Change to close icon
    }
    

}

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.querySelector(".openbtn").style.backgroundColor = "transparent";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".openbtn").style.backgroundColor = "#111";
}
