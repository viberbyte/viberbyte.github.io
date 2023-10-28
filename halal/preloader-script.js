// For Demo Purpose Only
var pageLoad;

function pageLoadFunction() {
  pageLoad = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("preloader-background").style.display = "none";
  document.getElementById("pageContent").style.display = "block";
}