document.querySelectorAll(".accordion-question").forEach(item => {
  item.addEventListener("click", (event) => {
    console.log("click!");
    item.classList.toggle("open");
    item.nextElementSibling.classList.toggle("open");
  });
});