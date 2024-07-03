window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'AW-564133486');

function toggleDropDown() {
    var dropOptions = document.querySelector(".nav-bar-drop-options");
    
    // Verificăm dacă este afișat
    var isDisplayed = window.getComputedStyle(dropOptions).display !== "none";
    
    // Setăm display-ul în funcție de starea curentă
    dropOptions.style.display = isDisplayed ? "none" : "block";
  }