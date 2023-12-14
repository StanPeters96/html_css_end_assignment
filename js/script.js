//Loop om te kijken welke link actief is.

document.querySelectorAll('.nav_active').forEach(link => {
    if(link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
    }
    console.log(link.href, window.location.href)
})

//Hamburger menu

//activeren

const hamburger = document.querySelector(".hamburger");
const menuArea = document.querySelector(".menu-area");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuArea.classList.toggle("active");
})

// sluiten bij klikken link
document.querySelectorAll(".nav_active").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menuArea.classList.remove("active");
}))

// Google maps API:
"use strict";

function initMap() {
  const myLatLng = {
    lat: 52.04547882080078,
    lng: 4.955466270446777
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
}