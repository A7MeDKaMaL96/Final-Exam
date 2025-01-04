let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  window.scroll({
    top: 0,
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
